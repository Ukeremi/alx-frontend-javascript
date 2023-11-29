export default function loadBalancer(chinaDownload, USDownload) {
    return Promise.race([ChinaDownload, USDownload])
    .then((res) => res);
}