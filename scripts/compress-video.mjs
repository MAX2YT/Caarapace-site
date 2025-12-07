/**
 * Video Compression Script
 * Compresses MP4 to WebM for better web performance
 * Usage: node scripts/compress-video.mjs
 */

import { spawn } from 'child_process';
import { stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import ffmpegPath from 'ffmpeg-static';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = join(__dirname, '..', 'public', 'crabintro.mp4');
const outputPath = join(__dirname, '..', 'public', 'crabintro.webm');

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function compressVideo() {
    console.log('🎬 Video Compression Script\n');

    const inputStats = await stat(inputPath);
    console.log(`Input: crabintro.mp4 (${formatBytes(inputStats.size)})`);
    console.log('Converting to WebM format...\n');

    return new Promise((resolve, reject) => {
        const ffmpeg = spawn(ffmpegPath, [
            '-i', inputPath,
            '-c:v', 'libvpx-vp9',  // VP9 codec for WebM
            '-crf', '30',          // Quality (lower = better, 30 is good balance)
            '-b:v', '0',           // Variable bitrate
            '-c:a', 'libopus',     // Opus audio codec
            '-b:a', '128k',        // Audio bitrate
            '-y',                  // Overwrite output
            outputPath
        ]);

        ffmpeg.stderr.on('data', (data) => {
            // FFmpeg outputs progress to stderr
            const str = data.toString();
            if (str.includes('time=')) {
                process.stdout.write('\r' + str.trim().substring(0, 60) + '...');
            }
        });

        ffmpeg.on('close', async (code) => {
            if (code === 0) {
                const outputStats = await stat(outputPath);
                const savings = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);
                console.log(`\n\n✅ Done!`);
                console.log(`   Output: crabintro.webm (${formatBytes(outputStats.size)})`);
                console.log(`   Savings: ${savings}%`);
                resolve();
            } else {
                reject(new Error(`FFmpeg exited with code ${code}`));
            }
        });

        ffmpeg.on('error', reject);
    });
}

compressVideo().catch(console.error);
