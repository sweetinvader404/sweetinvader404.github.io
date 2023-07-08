function retrieveUserPreferences(t) {
  var e = document.referrer;
  (updatingPreferences = 1),
    $.post("/Account/RetrieveUserPreferences", { referrer: e }, function (e) {
      (e.LastLoad = new Date().getTime()),
        Basil.sessionStorage.set("userObject", e),
        Basil.cookie.remove("usaj-u"),
        displayHeaderContent(e),
        0 < e.AssignedFeatures.length &&
          Basil.cookie.set("usaj-f", e.AssignedFeatures, {
            expireDays: 0,
            secure: !0
          }),
        "function" == typeof updateSessionContent && updateSessionContent(),
        (updatingPreferences = 0),
        null != t && (location.href = t);
    });
}
