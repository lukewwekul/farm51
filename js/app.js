
function app(){
    console.log('startApp ok...');

//****************************************************
//**************  DOM  ************************
//*********************************
    function buildDom(dataArg){
        let configDiv = makeElmnt('div', 'configDiv', 'divAll'),
            summaryDiv = makeElmnt('div', 'summaryDiv', 'divAll'),

            configTitle = makeElmnt('div', 'configTitle', 'configDiv'),
            configModel = makeElmnt('div', 'configModel', 'configDiv'),
            configEngine = makeElmnt('div', 'configEngine', 'configDiv'),
            configGearbox = makeElmnt('div', 'configGearbox', 'configDiv'),
            configColor = makeElmnt('div', 'configColor', 'configDiv'),

            summaryTitle = makeElmnt('div', 'summaryTitle', 'summaryDiv'),
            summaryImgDiv = makeElmnt('div', 'summaryImgDiv', 'summaryDiv'),
            summaryImg = makeElmnt('img', 'summaryImg', 'summaryImgDiv'),
            summaryTable = makeElmnt('table', 'summaryTable', 'summaryDiv'),

            tableColumn = makeElmnt('tr', 'tableColumn', 'summaryTable'),
            tableModel = makeElmnt('tr', 'tableModel', 'summaryTable'),
            tableEngine = makeElmnt('tr', 'tableEngine', 'summaryTable'),
            tableGearbox = makeElmnt('tr', 'tableGearbox', 'summaryTable'),
            tableColor = makeElmnt('tr', 'tableColor', 'summaryTable'),
            tableSpace = makeElmnt('tr', 'tableSpace', 'summaryTable'),
            tablePrice = makeElmnt('tr', 'tablePrice', 'summaryTable'),

            //tableColumnName = makeElmnt('th', 'tableColumnName', 'tableColumn'),
            //tableColumnValue = makeElmnt('th', 'tableColumnValue', 'tableColumn'),
            tableModelName = makeElmnt('td', 'tableModelName', 'tableModel'),
            tableModelValue = makeElmnt('td', 'tableModelValue', 'tableModel'),
            tableEngineName = makeElmnt('td', 'tableEngineName', 'tableEngine'),
            tableEngineValue = makeElmnt('td', 'tableEngineValue', 'tableEngine'),
            tableGearboxName = makeElmnt('td', 'tableGearboxName', 'tableGearbox'),
            tableGearboxValue = makeElmnt('td', 'tableGearboxValue', 'tableGearbox'),
            tableColorName = makeElmnt('td', 'tableColorName', 'tableColor'),
            tableColorValue = makeElmnt('td', 'tableColorValue', 'tableColor'),
            tableSpaceName = makeElmnt('td', 'tableSpaceName', 'tableSpace'),
            tableSpaceValue = makeElmnt('td', 'tableSpaceValue', 'tableSpace'),
            tablePriceName = makeElmnt('td', 'tablePriceName', 'tablePrice'),
            tablePriceValue = makeElmnt('td', 'tablePriceValue', 'tablePrice');


        configTitle.innerHTML='<h2>config</h2>';
        summaryTitle.innerHTML='<h2>summary</h2>';
        configModel.innerHTML='<h3>Model</h3>';
        configEngine.innerHTML='<h3>Engine</h3>';
        configGearbox.innerHTML='<h3>Gearbox</h3>';
        configColor.innerHTML='<h3>Color</h3>';


        appData.setPriceData();
        makeConfigDom(dataArg);
        updateSummaryDom(dataArg);
    }


    function makeConfigDom(dataArg){
        let configModelUl = makeElmnt('ul', 'configModelUl', 'configModel');
        for (i in dataArg.model){
            //console.log(dataArg.model[i].name);
            let modelTmp = makeElmnt('li', 'model'+i, 'configModelUl');
            modelTmp.className = "selectedNone";
            modelTmp.innerHTML = dataArg.model[i].name;
            modelTmp.onclick = function(){appData.click(this.id);};
        }
        document.getElementById('model' + appData.selectData.model).className = 'selectedYes';

        let configEngineUl = makeElmnt('ul', 'configEngineUl', 'configEngine');
        for (i in dataArg.model[appData.selectData.model].engine){
            //console.log(dataArg.model[appData.selectData.model].engine[i]);
            let engineTmp = makeElmnt('li', 'engine'+dataArg.model[appData.selectData.model].engine[i], 'configEngineUl');
            engineTmp.className = "selectedNone";
            engineTmp.innerHTML = dataArg.engine[dataArg.model[appData.selectData.model].engine[i]].name;
            engineTmp.onclick = function(){appData.click(this.id);};
        }
        document.getElementById('engine' + appData.selectData.engine).className = 'selectedYes';

        let configGearboxUl = makeElmnt('ul', 'configGearboxUl', 'configGearbox');
        for (i in dataArg.engine[appData.selectData.engine].gearbox){
            //console.log(dataArg.engine[appData.selectData.engine].gearbox[i]);
            let gearboxTmp = makeElmnt('li', 'gearbox'+dataArg.engine[appData.selectData.engine].gearbox[i], 'configGearboxUl');
            gearboxTmp.className = "selectedNone";
            gearboxTmp.innerHTML = dataArg.gearbox[dataArg.engine[appData.selectData.engine].gearbox[i]].name;
            gearboxTmp.onclick = function(){appData.click(this.id);};
        }
        document.getElementById('gearbox' + appData.selectData.gearbox).className = 'selectedYes';

        let configColorUl = makeElmnt('ul', 'configColorUl', 'configColor');
        for (i in dataArg.model[appData.selectData.model].color){
            //console.log(dataArg.model[appData.selectData.model].color[i]);
            let colorTmp = makeElmnt('li', 'color'+dataArg.model[appData.selectData.model].color[i], 'configColorUl');
            colorTmp.className = "selectedNoneColor";
            colorTmp.style.backgroundColor = dataArg.color[dataArg.model[appData.selectData.model].color[i]].hex;
            colorTmp.onclick = function(){appData.click(this.id);};
        }
        document.getElementById('color' + appData.selectData.color).className = 'selectedYesColor';
    }

    function deleteConfigDom(){
        document.getElementById('configModel').removeChild(document.getElementById('configModelUl'));
        document.getElementById('configEngine').removeChild(document.getElementById('configEngineUl'));
        document.getElementById('configGearbox').removeChild(document.getElementById('configGearboxUl'));
        document.getElementById('configColor').removeChild(document.getElementById('configColorUl'));
    }


    function updateSummaryDom(dataArg){
        summaryImg.src = 'img/' + dataArg.model[appData.selectData.model].img;
        summaryImgDiv.style.backgroundColor = dataArg.color[appData.selectData.color].hex;

        //tableColumnName.innerHTML = 'nnn';
        //tableColumnValue.innerHTML = 'vvv';

        tableModelName.innerHTML = 'Model';
        tableModelValue.innerHTML = appData.dataJson.model[appData.selectData.model].name;
        tableModelValue.className = 'tableRight';

        tableEngineName.innerHTML = 'Engine';
        tableEngineValue.innerHTML = appData.dataJson.engine[appData.selectData.engine].name;
        tableEngineValue.className = 'tableRight';

        tableGearboxName.innerHTML = 'Gearbox';
        tableGearboxValue.innerHTML = appData.dataJson.gearbox[appData.selectData.gearbox].name;
        tableGearboxValue.className = 'tableRight';

        tableColorName.innerHTML = 'Color';
        tableColorValue.innerHTML = appData.dataJson.color[appData.selectData.color].name;
        tableColorValue.className = 'tableRight';

        tableSpaceName.innerHTML = '&nbsp';
        tableSpaceValue.innerHTML = '&nbsp';
        tableSpaceValue.className = 'tableRight';

        tablePriceName.innerHTML = 'Price';
        tablePriceValue.innerHTML = '$' + appData.price;
        tablePriceValue.className = 'tableRight';
        //summaryTitle.style.backgroundColor = 'gray';
    }


    function makeElmnt(whatArg, nameIdArg, parrentIdArg){
        let elmntTmp = document.createElement(whatArg);
        elmntTmp.id = nameIdArg;
        if (parrentIdArg) document.getElementById(parrentIdArg).appendChild(elmntTmp);
        return elmntTmp;
    }

//******************************************************
//************ AJAX ****************************
//*************************************
    function loadData(urlArg){
        let loadJson = new XMLHttpRequest();
        loadJson.onload = function() {
            if (this.readyState == 4 && this.status == 200) {
                let dataTmp = JSON.parse(this.responseText);
                console.log('loadData' + urlArg + ' ok...');
                appData.dataJson = dataTmp;
                buildDom(dataTmp);
            }
        };
        loadJson.open("GET", urlArg, true);
        loadJson.send();
    }

    loadData("js/data.json");


//******************************************************
//************ appData *********************
//*******************************
    let appData = {
            dataJson: null,

            priceData: {
                model: 0,
                engine: 0,
                gearbox: 0,
                color: 0
            },

            price: 0,

            countPrice: function(){
                this.price = 0;
                for (i in this.priceData){
                    this.price += this.priceData[i];
                }
            },

            selectData: {
                model: 1,
                engine: 1,
                gearbox: 1,
                color: 0
            },

            setPriceData: function(){
                this.price = 0;
                for (i in this.selectData){
                    this.priceData[i] =  this.dataJson[i][this.selectData[i]].price;
                    console.log('price ' + i + ' = ' + this.dataJson[i][this.selectData[i]].price);
                }
                for (i in this.priceData){
                    this.price += this.priceData[i];
                }
                console.log('PRICE = ' + this.price);
            },

            setClassInSelectedEl: function(){

            },

            click: function(idArg){
                //console.log(idArg);
                let whatTmp = idArg.slice(0,5),
                    whatIndxNrTmp = 0;
                //console.log(whatTmp);

                switch(whatTmp) {
                    case 'model':
                        whatIndxNrTmp = idArg.slice(5);
                        //console.log(whatIndxNrTmp);
                        this.selectData.model = whatIndxNrTmp;
                        this.selectData.engine = this.dataJson.model[this.selectData.model].engine[0];
                        this.selectData.gearbox = this.dataJson.engine[this.dataJson.model[this.selectData.model].engine[0]].gearbox[0];
                        this.selectData.color = this.dataJson.model[this.selectData.model].color[0];
                        this.setPriceData();
                        this.resetDom();
                        break;

                    case 'engin':
                        whatIndxNrTmp = idArg.slice(6);
                        //console.log(whatIndxNrTmp);
                        this.selectData.engine = whatIndxNrTmp;
                        this.selectData.gearbox = this.dataJson.engine[this.selectData.engine].gearbox[0];
                        this.setPriceData();
                        this.resetDom();
                        break;

                    case 'gearb':
                        whatIndxNrTmp = idArg.slice(7);
                        //console.log(whatIndxNrTmp);
                        this.selectData.gearbox = whatIndxNrTmp;
                        this.setPriceData();
                        this.resetDom();
                        break;

                    case 'color':
                        whatIndxNrTmp = idArg.slice(5);
                        //console.log(whatIndxNrTmp);
                        this.selectData.color = whatIndxNrTmp;
                        this.setPriceData();
                        this.resetDom();
                        break;

                    default:
                        console.log('appData.click() problem...');
                }
            },

            resetDom: function(){
                deleteConfigDom();
                makeConfigDom(this.dataJson);
                updateSummaryDom(this.dataJson);
            }
    }

}
