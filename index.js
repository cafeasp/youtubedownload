const ytdl = require('@distube/ytdl-core');

const ffmpeg = require('fluent-ffmpeg');

// Function to download and convert video to MP3
function downloadAsMp3(url, outputPath) {
   const stream = ytdl(url, {
      quality: 'highestaudio',
   });

   ffmpeg(stream)
      .audioBitrate(128)
      .save('./music/' + outputPath)
      .on('end', () => {
         console.log('Download and conversion complete!');
      });
}

// Example usage
downloadAsMp3('youtub_e_video_url', 'DANCE.mp3');
