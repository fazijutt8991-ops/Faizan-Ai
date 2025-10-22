const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch information about a GitHub repository.",
    react: "📂",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/Faizan-MD-BOTZ/Faizan-Ai';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `*BOT NAME:*\n> ${repoData.name}\n\n*OWNER NAME:*\n> ${repoData.owner.login}\n\n*STARS:*\n> ${repoData.stargazers_count}\n\n*FORKS:*\n> ${repoData.forks_count}\n\n*GITHUB LINK:*\n> ${repoData.html_url}\n\n*DESCRIPTION:*ﺍﻟﺴَّـــــــﻼَﻡُ ﻋَﻠَﻴــْــﻜُﻢ ﻭَﺭَﺣْﻤَﺔُ ﺍﻟﻠﻪِ .....💐🖤*
 صبـــح بــخیـــر زنـــدگـــی ..............💐🖤

*اے اللّٰہ  غُربت مفلسی محرومی جیسے حالات سے ہم سب کی حفاظت فرما۔۔  حلال رزق بہترین روزی اچھی کمائی سے ہم سب کے گھروں میں خوشحالی نصیب فرما۔۔ اے اللّٰہ  جو غریبی مفلسی سے لڑ رہے ہیں بُرے حالات کے مارے ہیں ان پر رحم فرما تیرے خزانے میں کوئی کمی نہیں۔ اپنے غیبی خزانہ سے ان کی مدد و نصرت فرما  اے اللّٰہ  تمام مسلمانوں کو حوادث زمانہ، موسم کی سختیوں، نامساعد حالات ، دیدہ و نادیدہ مخالفین سے محفوظ فرما۔۔اور ہم سب  کی زندگیوں میں امن، سکون، صحت و عافیت اور کشادگی لکھ دے۔۔ غُربت مفلسی محرومی۔۔بے روزگاری کا خاتمہ فرما۔۔۔  سب گھروں میں رحمتیں برکتیں نعمتیں وسعتیں نازل فرما۔۔۔*

*آمیـــن ثم آمیــــن یا رب العالمیــن**\n> ${repoData.description || 'No description'}\n\n*Don't Forget To Star and Fork Repository*\n\n> _FAIZAN-AI🫀_`;

        // Send image with caption
        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/jq65ev.jpg` },
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363421896999345@newsletter',
                    newsletterName: '𝐹𝑎𝑖𝑧𝑎𝑛-𝐴𝑖',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Send local audio file
        const audioPath = path.join(__dirname, '../assets/menu.m4a');
        await conn.sendMessage(from, {
            audio: fs.readFileSync(audioPath),
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363421896999345@newsletter',
                    newsletterName: '𝔽𝕒𝕚𝕫𝕒𝕟-𝕒𝕚',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
