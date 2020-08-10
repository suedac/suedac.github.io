require(['tornis'], function (tornis) {

    const stripes = document.getElementsByTagName("path");

    function scrollChanged() {
        for (var i = 0; i < stripes.length; i++) {
            stripes[i].style.strokeDashoffset = 7149 * (1 - (state.scroll.top / (state.size.docY - state.size.y)));
        }
    }

    const { watchViewport } = tornis;
    const { getViewportState } = tornis;

    const updateValues = ({ size, scroll, mouse, orientation }) => {
        state = getViewportState();
        if (scroll.changed) {
            scrollChanged();
        }
    };

    watchViewport(updateValues);

})
