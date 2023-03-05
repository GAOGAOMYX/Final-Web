
//获取页面上所有 js-scroll 元素，使用 document.querySelectorAll() 即可：
// const scrollElements = document.querySelectorAll('.js-scroll')
// 默认淡出所有目标元素
// 遍历这些元素，使其全部淡出不可见：
var scrollElements = document.querySelectorAll('.scroll');
console.log(scrollElements);
scrollElements.forEach((el) => {
    // 淡出视线
    el.style.opacity = 0;
})
console.log(document.documentElement.clientHeight);
// 我们可以通过判断元素距离页面顶部的间距是否小于页面可见部分的高度，来检测元素是否在用户视窗中。
// 修改这个函数来检测元素是否向页面滚动了 x 个像素，或者检测页面滚动的百分比
// 如果元素已经按 scrollOffset 的数量滚动到页面中，该函数返回 true。我们再稍作修改，把参数 scrollOffset 变成百分比：
var elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
    )
}
// 在
var displayScrollElement = (element) => {
    element.classList.add('scrolled');
}

// 不在
var hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};
// 把我们前面的逻辑与 displayScrollElement 函数结合起来，并使用 forEach 方法在所有 js-scroll 元素上调用该函数
var handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        }
        else {
            hideScrollElement(el);
        }
    })
}
// 事件监听
window.addEventListener('scroll', () => {
    handleScrollAnimation();
})
