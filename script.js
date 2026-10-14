<script>
(function () {
    function createGamyLocationMarker() {
        const locationMarker = document.querySelector(
            ".leaflet-control-locate-location"
        );

        if (!locationMarker) return;
        if (locationMarker.dataset.gamyStyled === "true") return;

        locationMarker.dataset.gamyStyled = "true";

        locationMarker.innerHTML = `
            <div class="gamy-location-marker">
                GS
            </div>
        `;
    }

    function watchForLeafletLocation() {
        createGamyLocationMarker();

        const observer = new MutationObserver(function () {
            createGamyLocationMarker();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            watchForLeafletLocation
        );
    } else {
        watchForLeafletLocation();
    }
})();
</script>
