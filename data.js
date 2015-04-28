
var serverURL = "http://dev01.nik.uni-obuda.hu/FirefoxOSParty/html5pluss";

var users = [1]; //[1, 2]
var forms = [{ id: 1, viewtypeid: "ertek", items: ["szam1", "szam2"] }];

function getData() {

    var arr = { viewer: '1', users: users, forms: forms, system: {} };
    try {
        $.ajax({
            url: serverURL,
            type: "POST",
            data: JSON.stringify(arr),
            success: function (response) {
                try { eval(response); }
                catch (e) { alert(e) }
                setTimeout(getData, 2000);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                for (var x in jqXHR) alert(x + ":" + jqXHR[x]);
            }
        });
    }
    catch (e) { alert(e); }
}

function ertek(pUser, pFormID, pData) {
    var data1 = pData[0].szam1;
    var data2 = Math.round(pData[0].szam2 * 18 / 100);
    data = data1 + data2;
    ShowChosenPeriodicElement();
}

getData();
