export function replaceSmallImg(url) {
    return url && url.replace('i.pximg.net', 'acgpic.net');
}

export function getQueryString(name) {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]);
    return null;
}

const requestMap = {
    rank: 'rank',
    wallpaper: 'pcWallpaper',
};

export const getRequestURL = `https://open.pixivic.net/modes/${requestMap[getQueryString('mode')] || 'rank'}?pageIndex=1`;
