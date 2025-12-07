/**
 * Image Compression Script
 * Converts PNG/JPG images to optimized WebP format
 * Usage: node scripts/compress-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, parse, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, '..', 'public');
const SUPPORTED_EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const WEBP_QUALITY = 85;

async function getImageFiles(dir) {
    const files = [];
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...await getImageFiles(fullPath));
        } else if (SUPPORTED_EXTENSIONS.includes(extname(entry.name).toLowerCase())) {
            files.push(fullPath);
        }
    }
    return files;
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function compressImage(inputPath) {
    const { dir, name } = parse(inputPath);
    const outputPath = join(dir, `${name}.webp`);

    try {
        const inputStats = await stat(inputPath);
        const inputSize = inputStats.size;

        if (inputSize < 500 * 1024) {
            console.log(`⏭️  Skipping ${name} (already ${formatBytes(inputSize)})`);
            return { skipped: true };
        }

        await sharp(inputPath).webp({ quality: WEBP_QUALITY }).toFile(outputPath);

        const outputStats = await stat(outputPath);
        const outputSize = outputStats.size;
        const savings = ((inputSize - outputSize) / inputSize * 100).toFixed(1);

        console.log(`✅ ${name}: ${formatBytes(inputSize)} → ${formatBytes(outputSize)} (${savings}% smaller)`);
        return { inputSize, outputSize, savings: parseFloat(savings) };
    } catch (error) {
        console.error(`❌ Error processing ${inputPath}:`, error.message);
        return { error: true };
    }
}

async function main() {
    console.log('🖼️  Image Compression Script\n============================\n');

    const imageFiles = await getImageFiles(PUBLIC_DIR);
    console.log(`Found ${imageFiles.length} images to process\n`);

    let totalInputSize = 0, totalOutputSize = 0, processedCount = 0;

    for (const file of imageFiles) {
        const result = await compressImage(file);
        if (result && !result.skipped && !result.error) {
            totalInputSize += result.inputSize;
            totalOutputSize += result.outputSize;
            processedCount++;
        }
    }

    if (processedCount > 0) {
        console.log(`\n📊 Summary: ${processedCount} images, ${formatBytes(totalInputSize)} → ${formatBytes(totalOutputSize)} (${((totalInputSize - totalOutputSize) / totalInputSize * 100).toFixed(1)}% savings)`);
    }
    console.log('\n✨ Done!');
}

main().catch(console.error);
