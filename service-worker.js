/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","f71b0fd4eee7147bc088c19ed47404d1"],["about/index.html","46c464b361de531d41032d0cb3417b0f"],["archives/2017/03/index.html","19c77d9617302f38c404a0b66abd5ae6"],["archives/2017/08/index.html","328c8ab7ba46f758ed516c36ac0620ab"],["archives/2017/09/index.html","200febe44879e2cca23bafa2467d099b"],["archives/2017/10/index.html","a6a870940cf6bb0607f4b01f149e82ec"],["archives/2017/11/index.html","c710b1c6cfeb47232bbd28ee98ba7636"],["archives/2017/12/index.html","291fce2e44b1aa9b77c7b11c0f495ab4"],["archives/2017/index.html","7265bd74ffde82e260660bdd640ac1b6"],["archives/2017/page/2/index.html","e35b4cdeab11835f1999bfa29c9c5bdc"],["archives/2018/01/index.html","c1cb4b0c675570138ffcd44aef67150c"],["archives/2018/03/index.html","8491dc5617d31978aa6c27e04c90a918"],["archives/2018/04/index.html","5dc21a0c6b759ca7f7325849623829df"],["archives/2018/05/index.html","3a95af80fd6dbe3541f31a637518147b"],["archives/2018/06/index.html","2a0b71777884be0aeccdc48fd4af09ef"],["archives/2018/07/index.html","d38dfed75d0d072a345f6c43d4236169"],["archives/2018/08/index.html","1c89f9c09d2d38791e16dc405175cab2"],["archives/2018/09/index.html","1f140c3b43e3152a6123ac283b0aeaa8"],["archives/2018/10/index.html","8fcd0af4aa6da5615de7dd42f789f92d"],["archives/2018/11/index.html","4dfe9aa4c075c036d3974190d4b17d9d"],["archives/2018/12/index.html","327dddacc74a913d9d4a2632ececdfa6"],["archives/2018/index.html","9e76f6580d7fa25fd53dd2efae9aea44"],["archives/2018/page/2/index.html","e7d92e6d70a398888b1e85be0d4f39d7"],["archives/2018/page/3/index.html","ee04999399165364450d604cc1002209"],["archives/2019/01/index.html","c693d559e08d214e1f216dd64aba72b1"],["archives/2019/02/index.html","d43737ff03400eec94c60f46526eb841"],["archives/2019/03/index.html","42e9828d0c8af4e9fb4fd1457c90eeda"],["archives/2019/04/index.html","f2ace3722cc74d35baf4828395552505"],["archives/2019/05/index.html","6243cff397e7c457a008c69888dd0988"],["archives/2019/09/index.html","19e12f0fbc3c9fe72baad69ad37d8cd5"],["archives/2019/12/index.html","be966a2c649fc914f5bb54601706bc48"],["archives/2019/index.html","1a5b0d20edc42c59e69ba9e5663996d1"],["archives/2020/03/index.html","495c4781661b6d9348dfcc1f5869841c"],["archives/2020/04/index.html","71eb0e00bfd3d56474612787a9d1aecf"],["archives/2020/08/index.html","6c815f1d085f854942961f6898f7add2"],["archives/2020/index.html","e37c75d1d1ad8a2e2aec4d33ea56fc21"],["archives/2021/01/index.html","5234fce0db9009930fe905f5fad79cab"],["archives/2021/02/index.html","67dd19e550486fe8d3aeef27e789a983"],["archives/2021/03/index.html","bc113f7df8342b778fd4b7b9e27a9aab"],["archives/2021/04/index.html","c7c5640ea4ca1815c0ffa903b4a9dcd0"],["archives/2021/06/index.html","2165a0319c013e000335d1670ebdcf3b"],["archives/2021/07/index.html","1cfe8f557bdaaf1f61d56eeea90da5d3"],["archives/2021/08/index.html","41c94169683a9728ca63b380ef1da8c2"],["archives/2021/index.html","56fd0697ec1a9989c17adbfd51af9a12"],["archives/2021/page/2/index.html","25be927b3b48d1b08b24830a76e6c16f"],["archives/index.html","692b566b114b8e9d0eb019ef1004b559"],["archives/page/2/index.html","949ca253b9c833612a3d2d83fa33e13a"],["archives/page/3/index.html","ad8ca2fdefb3d0bac6bea314a2fb1435"],["archives/page/4/index.html","b8f95842c0385617a577b5e0391bec1d"],["archives/page/5/index.html","147b4feb3131889ae95a2d85da5a355a"],["archives/page/6/index.html","fdd898f299516d0b317b83a34a7b77c4"],["archives/page/7/index.html","4a85e210c9624ef24f2ff53b3406ed52"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/about-linux/index.html","a9b867ca7e9aa3d68adad40ce67b5306"],["categories/cate/index.html","5cb2b2e916d3099036c155dfdfa13c08"],["categories/default/efficiency/index.html","7a2082871d860cc1e8ceb4e6879f5cd3"],["categories/default/index.html","4c54cf1dfb69c6ab76fd609065d339f2"],["categories/default/what/index.html","52bfbc8da385b97181c3322e5898f436"],["categories/dev-daily/dev-tools/index.html","e5c00ea384ab84daef91ccee09c36180"],["categories/dev-daily/index.html","d972c427f4c3b55ca24e68a4be3156d4"],["categories/dev-daily/page/2/index.html","bd48f1fd99a2c3dc84eb9c7b9793550c"],["categories/go-learn/Go基础/index.html","0dc066fb513da2ccab38dbf003f86c19"],["categories/go-learn/go-fighting/index.html","880f4be1b2c416e403acf91d5667d0a7"],["categories/go-learn/go-tool/index.html","aa5b39da20295da4499cf9fb87ce258b"],["categories/go-learn/grpc/index.html","164fea49f6087b6f718be3704cc96638"],["categories/go-learn/index.html","bb53ba773448f8859c22d7d99d8498d6"],["categories/go-learn/page/2/index.html","d529ca3fe822b6f4a90e47cab0785ff6"],["categories/index.html","31a3167667877e5a68405bbe239c54e4"],["categories/life/baby/index.html","4847543f6ed860f3bfd60a1dd909b044"],["categories/life/index.html","f7d59cd92a9ba909262d0abc33b07ec7"],["categories/life/running/index.html","96092ac76858ba5fd0490caabd48dd58"],["categories/my-blog/index.html","0b4cec2f6710362a17a1d6429d78eb57"],["categories/my-home/index.html","aea151b34611a464b30c306b33b21ce3"],["categories/my-home/my-server/index.html","457d03be7708bf594d28141230421290"],["categories/my-home/nas/index.html","285e54d18c50f8b39aea29e18fa471f2"],["categories/pki-ca-cert/cert/index.html","65b7201f56d0fca126b1089acde5cdcb"],["categories/pki-ca-cert/https/index.html","000e7ca5561d76d1171a0928c3ff0bca"],["categories/pki-ca-cert/index.html","b84db46a3feb46dd2ca59d73b30da6ca"],["categories/pki-ca-cert/pki-ca/index.html","4d7c9c7132244f6e386b4bf2d08b3154"],["css/main.css","52c74b0a1a149cb44e5c4cc6a12995c0"],["domains/index.html","aa5dde85bd2fb41f8871bd07a669d61f"],["domains/sell/index.html","d08dd5b1032b2ede8945ae369a9c3973"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["index.html","801f07d767399b302f998e07f894104d"],["js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["js/motion.js","e8073e03493feb145528c4bdbe613d70"],["js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["page/10/index.html","78c41d23eac03bd3acaa23fb46e28c9a"],["page/11/index.html","d9a4f1b46cdfa6d0ddc502acbc0b1379"],["page/12/index.html","23fa2d6325151afbe5604201e4d7cfeb"],["page/13/index.html","f0c697ff888a56bd2b8069729bc56a88"],["page/2/index.html","2c4be9963739452973c638adaa3ffa39"],["page/3/index.html","681009eb0bd84dec172ab2aa2b2b441e"],["page/4/index.html","ff05ae17b22e7f4626777a77e4a11faf"],["page/5/index.html","4ffe753a57513556ff845910dde5690a"],["page/6/index.html","ecba3944719ece17bb59a2bef201944b"],["page/7/index.html","097e2283169d073dc6b624a7ac1af8a1"],["page/8/index.html","1517b3ac19f6878e62bec9c6f7b55c14"],["page/9/index.html","de24d23aa524ed62c045ae1dfc2a17a0"],["post/accidents-of-migrating-to-go-modules.html","6138f5df754fbd8f86254a130f7dcdc1"],["post/auto-change-network-location-base-on-name-of-wifi.html","0e8573dd4363cbde00437875ed7946a1"],["post/blog-migration-hexo-next.html","76d0cbf53a3e147b32008fe79399a9a6"],["post/books.html","82a518dda0845b0d674669c35ea52e8d"],["post/breaking-all-the-rules-using-go-to-call-windows-api.html","8d3694733290acbfa8b1577aecbddfe5"],["post/cate-diy-cake.html","f243c798b2d2a097659e4a7c538404b6"],["post/centos-utf-8-warning.html","ee9da0440bfde4b198b8c60a5430bd12"],["post/clean-your-docker.html","2faa4520ea957862c7bdcb48f6649b60"],["post/conventional-commits-and-standard-version.html","e55d3fde85c749a896b06640fa8e19ef"],["post/daily-go-recover.html","0c71473bb90ce578d899e9f4df794d51"],["post/daily-hexo-auto-refresh.html","b871ba55d07e3c40996d69bd596f9e26"],["post/daily-pg-tips.html","4971888949dda7fea8d239f8a8848c06"],["post/db-tool-goose.html","864d062e17adaa3d711d6167a1b536ab"],["post/detail-of-tls13.html","87e84c3fb54cd0572a6f6bf78560d98f"],["post/disqus-reactions.html","5be95f64f0f3fe627230796ad4d4a4b1"],["post/fill-do-degree-graduation-certificate.html","8a239e43be6db7c7b17497f1bf57e747"],["post/gin-file-down-upload.html","d4b93d5a780ed41b59a2ee0c383f961f"],["post/go-build-vscode-win-env.html","8092732ee39a9188053245df3e1edb56"],["post/go-how-to-write-benchmark.html","aa2be0eb1d267a1fbd3a81bad988ea82"],["post/go-snippets.html","9b40bf26be030f0e393e1a4b9bf6ec22"],["post/go-swagger.html","9b92c8462524b12579adb7dc46092cc4"],["post/go-timers-life-cycle.html","1ef5097fe0beca315aaabfdf3b8760d8"],["post/golang-and-git-commit-message-pre-commit.html","7968b4dc4d741893d8a91ef2c6365587"],["post/golang-and-restful-api.html","53a5720b6dde7286036a5662fe958927"],["post/golang-cgo-mac-win-cross-compilation.html","91fa9857eab9814ae56c118ef1b19ecb"],["post/homelib-001-synology-hackintosh.html","f9137aed91704f480a31cc2d8c78db17"],["post/homelib-002-yue-me-bridge.html","8fa13c6533e73a73432ba34d11e88069"],["post/homelib-003-network-topology-and-hardware.html","23c5dc42f98ce50c862f0000e7e50f1b"],["post/homelib-004-prepare-the-server-environment.html","4231cba43755993eef4b199a05ef2486"],["post/homelib-005-ddns.html","439bee17eef17e2c1b89fb3a74b259ff"],["post/how-to-install-tshark-on-centos.html","051d2bee2b2a4fa3ad04cf07e18eb79a"],["post/how-to-use-grpc-in-golang-01.html","d87f9b676fa4369dbde6487f292e43de"],["post/how-to-use-grpc-in-golang-02.html","04c4defb8abebb27bcc409b4c0d9c95c"],["post/how-to-use-grpc-in-golang-03.html","0b7d12715841ae74c94c75d7332329ff"],["post/https-githubpages.html","b5a5726b03cf6438c903f2ddad9ce5b3"],["post/introduce-pkcs.html","a1ba277c88447ac001417a8a4cc34166"],["post/linux-command-line-summary-fopt.html","5f9953a085992dc2ced33049f6032172"],["post/mime-types-quick-look.html","f602eb37df8dabdecfc0cc119e27a467"],["post/my-first-home-server.html","780fc4d4d4f3ad123951b469b9cdeb06"],["post/my-first-marathon-01.html","2de3cee7d49e207f7e53d285b05e3b48"],["post/my-macvim-vimrc.html","8fe59c23d4708f5dd63580161a880a99"],["post/nginx-proxy-problem-with-dns-cache.html","e7ebc46abae07dae7f6b185d85b9d7a3"],["post/nginx-tls1.3-draft26.html","c0a62fcd6bc9e86ce42bde7c8df8c024"],["post/oauth2-protocol-details.html","4ad3b43a97b02121547d099819eabf06"],["post/pg-like-index-optimize.html","6f2c763f6766d816083aeff247656804"],["post/postgres-daily.html","8b1baa0edb125ec638cb48bf43cdeda1"],["post/shanghai-kindergarten-policy-2021.html","b57b68d37134aa212156f6cbfbbf03f5"],["post/shanghai-settltment-record.html","5844008ee720bde343360c197f301063"],["post/simple-use-go-exec-command.html","5ae30f80dd904dd35e3a89580f5ff79c"],["post/ssh-tips.html","362069fd2e6ae4d1c24fcf7cd39a5d0c"],["post/ssl-build-certificate-transparency.html","fb4b3957981693869f1cd639dcc13b59"],["post/ssl-category.html","1313d9e07cf02fa3cf994743cb527b10"],["post/ssl-handshake-detail.html","2ec883e27ec82efb51336c220b2eb431"],["post/start-ipfs-gateway.html","fba3ac2b636f2276218c44e8b5411948"],["post/start-use-ghost.html","538575bfd39314f9e0fb50faef481440"],["post/start-use-newifi3.html","508b1b3df26f5d7027dad97808f2e167"],["post/start-use-ubuntu-and-win.html","5afc3154ccebe5ff415fe0f7240a5d21"],["post/strage-db-delete.html","9434e966279f5dc8e62a824b6faf77cd"],["post/the-ultimate-programmers-guide-to-bash-scripting.html","5d528ffe0ec8135e3e18ed74fd0a4a98"],["post/tool-awscli-overview-1.html","37523d6839c7e6e2df70d73a0610e5a1"],["post/typora-upload-image-qiniu.html","43e569565a49134b5d71d33b7543df6d"],["post/ubutun-realtek-r8125-driver-install.html","487009d3053c584ee2cbccbf6ef8494e"],["post/use-github-action-to-deploy-your-hexo-blog.html","a17f1325dd30d918a18cc32d3feaf19f"],["post/what-ct-is-and-how-it-works.html","c047495aac197cda87c83224cb7b75c6"],["post/win10-vpn-lztp-ipsec-sharekey.html","7808cd6adbba710f622a7739dc6367fa"],["reading/index.html","ec131dc26bf00d6fa249b20dc6bb3d4b"],["schedule/index.html","ff4f1557910d1371fdff5a07fb1d680a"],["share/index.html","33509c5395b1889eb40c1d81a3a7fb65"],["tags/CI-CD/index.html","ad2dba1f327d61829f12d4e36fff17b2"],["tags/Github-Actions/index.html","b40c9e72baecf58b885401d1451c7f43"],["tags/Hexo/index.html","1d4537a00c195f16874f4f4757ba6dc1"],["tags/aws-cli/index.html","fac29e8a313f9da742a3d9be36dfe64a"],["tags/aws/index.html","fdbe27e3725096d4746b794638fee90c"],["tags/bash/index.html","47a907430e12335112b1c66ae2c3c722"],["tags/benchmark/index.html","ae050f4514100b2d6695f9e9fd5ab712"],["tags/books/index.html","1f3cf9633d13c11a15a34f93a79c0cbf"],["tags/centos/index.html","d59f2ea64bf8f0c81b2dd57520cc35c8"],["tags/cert/index.html","2f3a6a37a791e78126453cef11669e9d"],["tags/certificate-transparency/index.html","b56b05532f0d081e5565e7063a57e646"],["tags/cgo/index.html","982681db7c449ea78b58ca28a5de5508"],["tags/command/index.html","407b0207ea0536951924997e3eb73f73"],["tags/ct/index.html","a70e69281bfa63d68135a8b1229b6703"],["tags/ddns/index.html","051668dcdc0fafe99f5d92fbae3a041f"],["tags/disqus/index.html","13dac2c247774987a8c9c13ae9bb5d2e"],["tags/dns/index.html","d17390e42f0fc7a8b6bb9884a9f2116a"],["tags/docker/index.html","70d07aaea46da88f68202537ed1e9d3b"],["tags/gateway/index.html","fc277d70fa3f5df3feb44ec891a47a64"],["tags/ghost/index.html","a716155162409775232057df0a82a910"],["tags/gin/index.html","e62d44ca373ce97c860268ef3aa73988"],["tags/git-hook/index.html","e5fc70a536cb2512cf2958aa6bc98d46"],["tags/git/index.html","4a8c7100504d02faa4947cab21517723"],["tags/github-pages/index.html","b760193074cb456d790c5c2404e15614"],["tags/go-module/index.html","3aa5347d7cf135f29a5b3f19ea759e03"],["tags/go/index.html","b6dc6ab8609880c5e48131848956c834"],["tags/golang/index.html","9a0d4901081f380dc243be9c0bd29a27"],["tags/golang/page/2/index.html","663f5c01ba7d9ba52df9a4a6fae025f8"],["tags/goose/index.html","3a8480f90fadfca11d4d3a7cb4a27590"],["tags/grpc/index.html","9304814d6a19c6a7efa2c8732ecffb50"],["tags/handshake/index.html","fe9639e7db6e4ec19f543f2b856cdc55"],["tags/hexo/index.html","27f81e8191062659bfff9b49f77a24a5"],["tags/homelib/index.html","f68de1fa6f4f92f140dc7c56b930ea87"],["tags/https/index.html","b359d027fffb6d8300de325e3359ddcb"],["tags/index.html","983417362c04ac1216da45b027521679"],["tags/index/index.html","e7d6fc709a4cb94ba159fef91e8e30e2"],["tags/ipfs/index.html","c8ebc30f0b36c033b2d362b36298592d"],["tags/like/index.html","013cc8d5300300bfc3417db34ad5d092"],["tags/linux/index.html","17f6895a555fecc5482dd356667c7845"],["tags/location/index.html","d68256c58fb9d2f49e66e4824bcade38"],["tags/mac-os/index.html","bc593a69fb8bc6b8d21b0903b89a77f8"],["tags/merkle树/index.html","25dfc3b6beff66481d9f7774ea8ff49c"],["tags/mime-types/index.html","7b47b1eafa545a2af19f8186fef52c4d"],["tags/nas/index.html","3af8ff8aeac27390d3cea34027a58149"],["tags/newifi3/index.html","40b70b1f821bc5e7942fd1a8495dc82a"],["tags/next/index.html","218c27a496768c56a6992925fae06b45"],["tags/nginx/index.html","c46329765052b3bfc84d52b381eef8da"],["tags/oauth/index.html","e73f24fceef53a3e3f2236f74c86e0e7"],["tags/pkcs/index.html","45e2077fa0d38e15172ff3ac8e2aead4"],["tags/pki/index.html","38f4d13061152feb5d711c99d6f73242"],["tags/postgres/index.html","86eb20575135f572b2b8455264f26f93"],["tags/protobuf/index.html","3c01a04e978a3c03628b7b58899c0dd9"],["tags/recover/index.html","8354eb69c49b16c4e81e440fcb5f011b"],["tags/restful-api/index.html","9d729930a5ced74382c84b392d806a26"],["tags/router/index.html","5d94d815884c24d1345deb826fa278c3"],["tags/rpc/index.html","ca5bf2aa2cd25b5c4d0e1122508e3ae6"],["tags/shell/index.html","c4e8409cb759f1a6a304475c104a21e5"],["tags/snippet/index.html","6465921f69cf4eb4aedf976b588ae4f1"],["tags/sql/index.html","98c173e1891fdd0f0f80b8dc945c956a"],["tags/sqlite3/index.html","f67daae1700dbd2133bf26f7eec79d45"],["tags/ssh/index.html","b8231ca0416a390e8066c237782e5b5d"],["tags/ssl/index.html","6cce269827b441ad1b160f3ddf62fe0c"],["tags/standard-version/index.html","e7f8842e02ac90e5443670734bf50f20"],["tags/sth/index.html","302193c0ce2dc52c2600ee9fbb93d614"],["tags/stream/index.html","9bfc2dc5caecb9f74b7aeddf722193e7"],["tags/swagger/index.html","9275891bea472d448456b4d09e3b42b8"],["tags/timer/index.html","334aec02de2e181390bcb45d89966e47"],["tags/tls/index.html","9d66294d1db0452c88d25733d99f7de9"],["tags/tls1-3/index.html","c06bcd4345252a39b115ea9dc2c903ae"],["tags/tshark/index.html","fb583162c40e7ad36b3ee767596fae45"],["tags/typora/index.html","f43b7e75af14f8cb8ec1392accb2b8e7"],["tags/ubuntu/index.html","9aa26a27a7c5bf521518db2839e2f9d7"],["tags/vim/index.html","e3d414a8d61a85ebcde9a0271f3e36b3"],["tags/vpn/index.html","0df24019024ed1b8c89dce13d3c910bc"],["tags/vscode/index.html","bce71242007361f43d04ed69fe434e27"],["tags/windows/index.html","1726bb4efe24bc1cb1524d0a685008b5"],["tags/wireshark/index.html","2d2cdee34db540f3bc21872a72876c04"],["tags/yum/index.html","bec686a779ac056d1644e88836b3859c"],["tags/交叉编译/index.html","b9ff311bd79237ba81eeb8e4d83c0982"],["tags/加密/index.html","6ae5b9efcc0af09b9d4332f6e2ff381d"],["tags/宝宝/index.html","665e2457f0c776e06e3bb69176bf6144"],["tags/工具/index.html","c4272a868f869306dc7387b21059fdb8"],["tags/幼儿园/index.html","8e13bd7c0abb696c7b6a73ebe8019dfa"],["tags/戚风蛋糕/index.html","8d848bc7c764c6b56cff26e990138abc"],["tags/数据库/index.html","be4fad139057bf8af0521bc3eaf6c995"],["tags/服务器/index.html","fc6195ddf9f8b2e254c128f2c56a8bde"],["tags/生活/index.html","e25cf878a2823cd31195568c1e794eae"],["tags/美食/index.html","b642ab72d62dc9170a12f71c74e65550"],["tags/自动化/index.html","8bd56047ce9b0c33c6732f459f64b7a9"],["tags/落户/index.html","9503caaec70a07ef5cad8d0478fe0ad7"],["tags/马拉松/index.html","b02a03544778f2506bf3aadc2f0513b5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







