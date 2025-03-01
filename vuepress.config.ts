import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { FileList } from './src/node/index.js'
import { githubReleasesFilesAnalysis } from "./src/node/analysis/githubReleasesFilesAnalysis/index.js";
import { cloudflarePagesDownProxy } from "./src/node/proxy/cloudflarePagesDownProxy/index.js";
import { fileUrlTreeAnalysis } from "./src/node/analysis/fileUrlTreeAnalysis/index.js";
import { huggingFaceDatasetsAnalysis } from "./src/node/analysis/huggingFaceDatasetsAnalysis/index.js";
import { vercelDownProxy } from './src/node/proxy/vercelDownProxy/index.js';
import { netlifyDownProxy } from './src/node/proxy/netlifyDownProxy/index.js';
import { giteeReleasesFilesAnalysis } from './src/node/analysis/giteeReleasesFilesAnalysis/index.js';
import { githubReposAnalysis } from './src/node/analysis/githubReposAnalysis/index.js';
import { giteeReposAnalysis } from './src/node/analysis/giteeReposAnalysis/index.js';


/**
 * 站点配置文件，没有注释的选项如果不知道有什么作用不建议修改，有注释的选项可以根据注释修改
 * */
export default defineUserConfig({
  bundler: viteBundler(),
  pagePatterns: [],
  lang: 'zh-CN',
  public: `./public`,
  // 网站标题，标题颜色可在 src/client/css/main.css 中修改
  title: 'ZAKOPLAZA',
  // 网站的简介，有助于搜索引擎收录
  description: 'HanzeのFList - 文件列表',
  // 页面 <head> 标签内添加的额外标签。 不要修改/logo.png可以替换掉这个文件，删除logo.png会导致构建出错。
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  // 页面预加载，所有其它页面所需的文件都会被预拉取。这对于小型站点来说是十分有帮助的，因为它会大大提升页面切换的速度。但是在你的网站有很多页面时不建议你这么做。
  // 简单来说就是，如果你的文件不多就可以打开这个选项，可以大大提高页面切换的速度，如果文件非常多就不建议打开。建议超过100个文件就不要打开这个选项。
  shouldPrefetch: true,
  // 主题配置 FileList 是 vuepress 的一个主题，文件展示的功能全部由这个主题提供。
  theme: FileList([
    {
      // 挂载路径
      mountPath: "/Application/PixEZ",
      // 文件解析器，这里使用githubReleasesFilesAnalysis,可以解析github的release文件
      analysis: githubReleasesFilesAnalysis({
        // 仓库所有者的用户名
        user: "Notsfsssf",
        // 仓库所有者的仓库名
        repository: "pixez-flutter"
      }),
      downProxy: vercelDownProxy(),
    },
    {
      mountPath: "/Application/Pica Comic",
      analysis: githubReleasesFilesAnalysis({ user: "Pacalini", repository: "picacomic" }),
      // 下载代理配置,支持多个平台，参考:https://jjaw.cn/2024/8/3/flist-config-porxy/
      // 这个是为了解决github的国内下载慢的问题，和跨域问题，建议配置，不然pdf，txt，md等文件因为跨域无法预览
      // 如果你使用的不是 cloudflare Pages 部署需要删掉这一行，因为如果不是cloudflare Pages部署，这个代理是无法正常工作的
      downProxy: vercelDownProxy(),
    },
    {
      mountPath: "/Application/Pixiv Shaft",
      analysis: githubReleasesFilesAnalysis({ user: "CeuiLiSA", repository: "Pixiv-Shaft" }),
      downProxy: vercelDownProxy(),
    },
    {
      mountPath: "/Application/Pixeval",
      analysis: githubReleasesFilesAnalysis({ user: "Pixeval", repository: "Pixeval" }),
      downProxy: vercelDownProxy(),
    },
    {
      mountPath: "/Application/Bili.Copilot",
      analysis: githubReleasesFilesAnalysis({ user: "Richasy", repository: "Bili.Copilot" }),
      downProxy: vercelDownProxy(),
    },
    {
      mountPath: "/Application/Starward",
      analysis: githubReleasesFilesAnalysis({ user: "Scighost", repository: "Starward" }),
      downProxy: vercelDownProxy(),
    },
    {
      mountPath: "/Extensions/BewlyBewly",
      analysis: githubReleasesFilesAnalysis({ user: "BewlyBewly", repository: "BewlyBewly" }),
      downProxy: vercelDownProxy(),
    },
    {
      mountPath: "/Application/VPN/Clash Verge",
      analysis: githubReleasesFilesAnalysis({ user: "Clash-Verge-rev", repository: "clash-verge-rev" }),
      downProxy: vercelDownProxy(),
    },
    {
      mountPath: "/Application/VPN/Mihomo Party",
      analysis: githubReleasesFilesAnalysis({ user: "mihomo-party-org", repository: "mihomo-party" }),
      downProxy: vercelDownProxy(),
    },
    {
      mountPath: "/Application/VPN/Sing-Box",
      analysis: githubReleasesFilesAnalysis({ user: "SagerNet", repository: "sing-box" }),
      downProxy: vercelDownProxy(),
    },
    {
      mountPath: "/Application/VPN/Clash Meta For Android",
      analysis: githubReleasesFilesAnalysis({ user: "MetaCubeX", repository: "ClashMetaForAndroid" }),
      downProxy: vercelDownProxy(),
    },
    {
      mountPath: "/Application/VPN/v2rayNG",
      analysis: githubReleasesFilesAnalysis({ user: "2dust", repository: "v2rayNG" }),
      downProxy: vercelDownProxy(),
    },
    {
      mountPath: "/Application/Game/Minecraft/JAVA/PojavLauncher/Android",
      analysis: githubReleasesFilesAnalysis({ user: "PojavLauncherTeam", repository: "PojavLauncher" }),
      downProxy: vercelDownProxy(),
    },
    {
      mountPath: "/Application/Game/Minecraft/JAVA/PojavLauncher/iOS&iPadOS",
      analysis: githubReleasesFilesAnalysis({ user: "Hanze-C", repository: "PojavLauncher_iOS" }),
      downProxy: vercelDownProxy(),
    },
    {
      mountPath: "/",
      // 这里使用 fileUrlTreeAnalysis 文件放到对应的文件路径中
      analysis: fileUrlTreeAnalysis({
        "/Flist/测试视频.mp4": "https://github.com/jianjianai/FList/releases/download/root/test.video.2.1080p.webm",
        "/Image/Dress/SM.MS/22726/万叶.mp4": "https://github.com/Hanze-C/FList/releases/download/File/default.mp4"
      }),
      downProxy: vercelDownProxy(),//如果文件树地址下载比较慢，也可以配置代理
    },
    {
      mountPath: "/",
      // 这里使用 fileUrlTreeAnalysis 文件放到对应的文件路径中
      analysis: fileUrlTreeAnalysis({
        "/Application/VPN/nthLink/nthlink-win64-current.exe": "https://www.downloadnth.com/nthlink-win64-current.exe",
        "/Application/VPN/nthLink/nthlink-win32-current.exe": "https://www.downloadnth.com/nthlink-win32-current.exe",
        "/Application/VPN/nthLink/nthlink-android-current.apk": "https://www.downloadnth.com/nthlink-android-current.apk",
        "/Application/VPN/nthLink/MacOS(AppStore)": "https://apps.apple.com/us/app/nthlink/id1536318872?mt=12",
        "/Application/VPN/nthLink/iOS(AppStore)": "https://apps.apple.com/us/app/nthlink/id1467297604",
        "/Application/PixEZ/0.9.61/PixEZ-Windows": "https://hanze.lanzouw.com/iDhqh2nafw3g",
        "/Application/PixEZ/0.9.61/PixEZ-iOS(ZAKO)": "https://hanze.lanzouw.com/iSUK92naf03e",
        "/Image/Dress/SM.MS/22732/JK-1.png": "https://s2.loli.net/2025/02/12/aFbJZUwuhRAVE9G.png",
        "/Image/Dress/SM.MS/22732/JK-2.png": "https://s2.loli.net/2025/02/12/8zKi5c7rH6ANPEy.png",
        "/Image/Dress/SM.MS/22732/JK-3.png": "https://s2.loli.net/2025/02/12/2fhqjAVKk9mvliz.png",
        "/Image/Dress/SM.MS/22732/JK-4.png": "https://s2.loli.net/2025/02/12/gMzcfGOBme8nJa9.png",
        "/Image/Dress/SM.MS/22732/JK-5.png": "https://s2.loli.net/2025/02/12/qe6zNZXwPCD2sV7.png",
        "/Image/Dress/SM.MS/22746/JK-1.png": "https://s2.loli.net/2025/02/12/FzarbLw3eZOXUxy.png",
        "/Image/Dress/SM.MS/22746/JK-2.png": "https://s2.loli.net/2025/02/12/lfF2cZNG9aTHKBh.png",
        "/Image/Dress/SM.MS/22746/JK-3.png": "https://s2.loli.net/2025/02/12/io5cUZfVxJHYLpl.png",
        "/Image/Dress/CloudFlare/22732/JK-1.png": "https://paste.hanze.icu/file/dnD6Yc",
        "/Image/Dress/CloudFlare/22732/JK-2.png": "https://paste.hanze.icu/file/WfO4aa",
        "/Image/Dress/CloudFlare/22732/JK-3.png": "https://paste.hanze.icu/file/KPQY30",
        "/Image/Dress/CloudFlare/22732/JK-4.png": "https://paste.hanze.icu/file/b2bx0A",
        "/Image/Dress/CloudFlare/22732/JK-5.png": "https://paste.hanze.icu/file/1rupu3",
        "/Image/Dress/CloudFlare/22746/JK-1.png": "https://paste.hanze.icu/file/gL2pGw",
        "/Image/Dress/CloudFlare/22746/JK-2.png": "https://paste.hanze.icu/file/sTOi7U",
        "/Image/Dress/CloudFlare/22746/JK-3.png": "https://paste.hanze.icu/file/xSWxHH",
        "/Image/Dress/CloudFlare/22726/万叶-1.png": "https://paste.hanze.icu/file/gL2pGw",
        "/Image/Dress/CloudFlare/22726/万叶-2.png": "https://paste.hanze.icu/file/sTOi7U",
        "/Image/Dress/CloudFlare/22726/万叶-3.png": "https://paste.hanze.icu/file/xSWxHH",
        "/Image/Dress/SM.MS/22726/万叶-1.png": "https://s2.loli.net/2025/02/28/nr9aCSjGmHNVwyt.jpg",
        "/Image/Dress/SM.MS/22726/万叶-2.png": "https://s2.loli.net/2025/02/28/UfB9Wzv7V1Guyrs.jpg",
        "/Image/Dress/SM.MS/22726/万叶-3.png": "https://s2.loli.net/2025/02/28/gwFBYx5QfzPJepR.jpg",
        "/Image/Dress/SM.MS/22726/万叶-4.png": "https://s2.loli.net/2025/02/28/afR9gMklKh5AXFv.jpg",
      }),
    },
    // {
    //   mountPath: "/huggingface测试",
    //   analysis: huggingFaceDatasetsAnalysis({
    //     userName: "Open-Orca",
    //     datasetsName: "OpenOrca",
    //     branchName: "main",
    //     path: "/",
    //     //最大深度,如果文件夹有很多层最大递归解析多少层，默认10
    //     maxDeep: 3
    //   }),
    // },
    // {
    //   mountPath: "/gitee测试/发行版",
    //   analysis: giteeReleasesFilesAnalysis({
    //     user: "cosa-project",
    //     repository: "flist-test",
    //     direction: "desc"
    //   })
    // },
    // {
    //   mountPath: "/gitee测试/仓库",
    //   analysis: giteeReposAnalysis({
    //     user: "jja8",
    //     repository: "flist-test"
    //   }),
    // },
//     {
//       mountPath: "/Image/Dress/Developers",
//       analysis: githubReposAnalysis({
//         user: "Hanze-C",
//         repository: "Dress-2",
//       }),
//       downProxy: vercelDownProxy()
//     },
    // ... 可以配置多个挂载路径和仓库，以此类推
  ])
})
