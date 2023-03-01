
function tripShow() {
    var checkBox = document.getElementById("Trip");
    var text = document.getElementById("BDIP");
    if (checkBox.checked == true){
        BDIP.style.display = "block";
    } else {
        BDIP.style.display = "none";
    }
}

function fleetShow() {
    var checkBox = document.getElementById("Fleet");
    var text = document.getElementById("BDIF");
    if (checkBox.checked == true){
        BDIF.style.display = "block";
    } else {
        BDIF.style.display = "none";
    }
}

function imageryShow() {
    var checkBox = document.getElementById("IMAGERY");
    var text = document.getElementById("BDIMAGERY");
    if (checkBox.checked == true){
        BDIMAGERY.style.display = "block";
    } else {
        BDIMAGERY.style.display = "none";
    }
}

function overlayShow() {
    var checkBox = document.getElementById("OVERLAY");
    var text = document.getElementById("BDOVERLAY");
    if (checkBox.checked == true){
        BDOVERLAY.style.display = "block";
    } else {
        BDOVERLAY.style.display = "none";
    }
}

function barrierShow() {
    var checkBox = document.getElementById("BARRIER");
    var text = document.getElementById("BDBARRIER");
    if (checkBox.checked == true){
        BDBARRIER.style.display = "block";
    } else {
        BDBARRIER.style.display = "none";
    }
}

function otherShow() {
    var checkBox = document.getElementById("OTHER_OPTIONS");
    var text = document.getElementById("BDOTHER_OPTIONS");
    if (checkBox.checked == true){
        BDOTHER_OPTIONS.style.display = "block";
    } else {
        BDOTHER_OPTIONS.style.display = "none";
    }
}

        //---------------------------------------------------------------------------------------
        // This is code for opening the text-area under Lat-Long on Re-route
        const checkbox = document.getElementById('BDV20');

        checkbox.addEventListener('change', function() {
            const textareaWrapper = document.querySelector('.textarea-wrapper');
            if (checkbox.checked) {
                textareaWrapper.classList.add('expand');
            } else {
                textareaWrapper.classList.remove('expand');
            }
        });

        //---------------------------------------------------------------------------------------
        // This is code for opening the text-area under Barrier Others
        const checkbox1 = document.getElementById('BDV14');

        checkbox1.addEventListener('change', function() {
            const textareaWrapper1 = document.querySelector('.textarea-wrapper1');
            if (checkbox1.checked) {
                textareaWrapper1.classList.add('expand');
            } else {
                textareaWrapper1.classList.remove('expand');
            }
        });
        //---------------------------------------------------------------------------------------

        //---------------------------------------------------------------------------------------
        // This is code for opening the text-area under @physicalmedian
        const checkbox2 = document.getElementById('BDV34');

        checkbox2.addEventListener('change', function() {
            const textareaWrapper2 = document.querySelector('.textarea-wrapper2');
            if (checkbox2.checked) {
                textareaWrapper2.classList.add('expand');
            } else {
                textareaWrapper2.classList.remove('expand');
            }
        });
        //---------------------------------------------------------------------------------------

        //---------------------------------------------------------------------------------------
        // This is code for opening the text-area under @HGV
        const checkbox3 = document.getElementById('BDV35');

        checkbox3.addEventListener('change', function() {
            const textareaWrapper3 = document.querySelector('.textarea-wrapper3');
            if (checkbox3.checked) {
                textareaWrapper3.classList.add('expand');
            } else {
                textareaWrapper3.classList.remove('expand');
            }
        });
        //---------------------------------------------------------------------------------------

        //---------------------------------------------------------------------------------------
        // This is code which checks if the value of the lat-long textarea matches a particular 
        //pattern and display an alert if it does not.

        var latLongTextarea = document.getElementById('lat_long');

                latLongTextarea.addEventListener('blur', function() {
                    var input = latLongTextarea.value.trim();
                    const regex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;

                    if (!regex.test(input)) {
                        alert('Invalid latitude,longitude value (e.g. 40.7128,-74.0060)');
                        latLongTextarea.value='';
                    }

                });
        //---------------------------------------------------------------------------------------


        //--------------------------------------------------------------------------------------------------------
        // This is the code block for getting final_text on clicking Submit & Copy and clears the checkboxes
        function copyAndClear() {

            let finalText = '';

            //For Trip Diver Checkboxes
            if (document.getElementById('Trip').checked) {
                
                document.getElementById('Trip').checked = false;

                if (document.getElementById('BDV19').checked) {
                    finalText += document.getElementById('BDV19').value + ', ';
                    document.getElementById('BDV19').checked = false;
                }
                if (document.getElementById('NEW1').checked) {
                    finalText += document.getElementById('NEW1').value + ', ';
                    document.getElementById('NEW1').checked = false;
                }
                if (document.getElementById('BDV21').checked) {
                    finalText += document.getElementById('BDV21').value + ', ';
                    document.getElementById('BDV21').checked = false;
                }
                if (document.getElementById('BDV22').checked) {
                    finalText += document.getElementById('BDV22').value + ', ';
                    document.getElementById('BDV22').checked = false;
                }
                if (document.getElementById('BDV23').checked) {
                    finalText += document.getElementById('BDV23').value + ', ';
                    document.getElementById('BDV23').checked = false;
                }
                if (document.getElementById('BDV20').checked) {
                    finalText += 'TGI Lat-Long: ';
                    finalText += document.getElementById('lat_long').value.trim() + ', ';
                    document.getElementById('lat_long').value='';
                    document.getElementById('BDV20').checked = false;
                }
            }tripShow();//To close the collapsible checkbox


            //For Fleet Edge Checkboxes
            if (document.getElementById('Fleet').checked) {
                
                document.getElementById('Fleet').checked = false;

                if (document.getElementById('BDV1').checked) {
                    finalText += document.getElementById('BDV1').value + ', ';
                    document.getElementById('BDV1').checked = false;
                }
                if (document.getElementById('BDV2').checked) {
                    finalText += document.getElementById('BDV2').value + ', ';
                    document.getElementById('BDV2').checked = false;
                }
                if (document.getElementById('BDV3').checked) {
                    finalText += document.getElementById('BDV3').value + ', ';
                    document.getElementById('BDV3').checked = false;
                }
            }fleetShow();//To close the collapsible checkbox


            //For Public and Private OSM Imageries Checkboxes
            if (document.getElementById('IMAGERY').checked) {
                
                document.getElementById('IMAGERY').checked = false;

                if (document.getElementById('BDV4').checked) {
                    finalText += document.getElementById('BDV4').value + ', ';
                    document.getElementById('BDV4').checked = false;
                }
                if (document.getElementById('BDV5').checked) {
                    finalText += document.getElementById('BDV5').value + ', ';
                    document.getElementById('BDV5').checked = false;
                }
                if (document.getElementById('BDV6').checked) {
                    finalText += document.getElementById('BDV6').value + ', ';
                    document.getElementById('BDV6').checked = false;
                }
                if (document.getElementById('BDV7').checked) {
                    finalText += document.getElementById('BDV7').value + ', ';
                    document.getElementById('BDV7').checked = false;
                }
                if (document.getElementById('BDV8').checked) {
                    finalText += document.getElementById('BDV8').value + ', ';
                    document.getElementById('BDV8').checked = false;
                }
            }imageryShow();//To close the collapsible checkbox

            //For Public Street View Checkboxes
            if (document.getElementById('OVERLAY').checked) {
                
                document.getElementById('OVERLAY').checked = false;

                if (document.getElementById('BDV9').checked) {
                    finalText += document.getElementById('BDV9').value + ', ';
                    document.getElementById('BDV9').checked = false;
                }
                if (document.getElementById('BDV10').checked) {
                    finalText += document.getElementById('BDV10').value + ', ';
                    document.getElementById('BDV10').checked = false;
                }
            }overlayShow();//To close the collapsible checkbox

            //For Other Comments
            if(document.getElementById('floatingTextarea').value != ''){
                finalText += 'Comments: ';
                finalText += document.getElementById('floatingTextarea').value + ', ';
            }

            //For Public OSM Changeset
            if(document.getElementById('changeset').value != ''){
                finalText += 'Changeset: ';
                finalText += document.getElementById('changeset').value + ', ';
            }

            //For Barrier Checkboxes
            if (document.getElementById('BARRIER').checked) {
                
                document.getElementById('BARRIER').checked = false;

                if (document.getElementById('BDV11').checked) {
                    finalText += document.getElementById('BDV11').value + ', ';
                    document.getElementById('BDV11').checked = false;
                }
                if (document.getElementById('BDV12').checked) {
                    finalText += document.getElementById('BDV12').value + ', ';
                    document.getElementById('BDV12').checked = false;
                }
                if (document.getElementById('BDV13').checked) {
                    finalText += document.getElementById('BDV13').value + ', ';
                    document.getElementById('BDV13').checked = false;
                }
                if (document.getElementById('BDV14').checked) {
                    finalText += document.getElementById('barrier_other').value + ', ';
                    document.getElementById('barrier_other').value='';
                    document.getElementById('BDV14').checked = false;
                }
                if (document.getElementById('BDV15').checked) {
                    finalText += document.getElementById('BDV15').value + ', ';
                    document.getElementById('BDV15').checked = false;
                }
                if (document.getElementById('BDV16').checked) {
                    finalText += document.getElementById('BDV16').value + ', ';
                    document.getElementById('BDV16').checked = false;
                }
                if (document.getElementById('BDV17').checked) {
                    finalText += document.getElementById('BDV17').value + ', ';
                    document.getElementById('BDV17').checked = false;
                }
                if (document.getElementById('BDV18').checked) {
                    finalText += document.getElementById('BDV18').value + ', ';
                    document.getElementById('BDV18').checked = false;
                }
                if (document.getElementById('BDV24').checked) {
                    finalText += document.getElementById('BDV24').value + ', ';
                    document.getElementById('BDV24').checked = false;
                }
                if (document.getElementById('BDV25').checked) {
                    finalText += document.getElementById('BDV25').value + ', ';
                    document.getElementById('BDV25').checked = false;
                }
                if (document.getElementById('BDV26').checked) {
                    finalText += document.getElementById('BDV26').value + ', ';
                    document.getElementById('BDV26').checked = false;
                }
            }barrierShow();//To close the collapsible checkbox

            //For Other Options Checkboxes
            if (document.getElementById('OTHER_OPTIONS').checked) {
                
                document.getElementById('OTHER_OPTIONS').checked = false;

                if (document.getElementById('BDV27').checked) {
                    finalText += document.getElementById('BDV27').value + ', ';
                    document.getElementById('BDV27').checked = false;
                }
                if (document.getElementById('BDV28').checked) {
                    finalText += document.getElementById('BDV28').value + ', ';
                    document.getElementById('BDV28').checked = false;
                }
                if (document.getElementById('BDV29').checked) {
                    finalText += document.getElementById('BDV29').value + ', ';
                    document.getElementById('BDV29').checked = false;
                }
                if (document.getElementById('BDV30').checked) {
                    finalText += document.getElementById('BDV30').value + ', ';
                    document.getElementById('BDV30').checked = false;
                }
                if (document.getElementById('BDV31').checked) {
                    finalText += document.getElementById('BDV31').value + ', ';
                    document.getElementById('BDV31').checked = false;
                }
                if (document.getElementById('BDV32').checked) {
                    finalText += document.getElementById('BDV32').value + ', ';
                    document.getElementById('BDV32').checked = false;
                }
                if (document.getElementById('BDV33').checked) {
                    finalText += document.getElementById('BDV33').value + ', ';
                    document.getElementById('BDV33').checked = false;
                }
                if (document.getElementById('BDV34').checked) {
                    finalText += '@physicalmedian: ';
                    finalText += document.getElementById('@physicalmedian').value + ', ';
                    document.getElementById('@physicalmedian').value='';
                    document.getElementById('BDV34').checked = false;
                }
                if (document.getElementById('BDV35').checked) {
                    finalText += '@HGV: ';
                    finalText += document.getElementById('@HGV').value + ', ';
                    document.getElementById('@HGV').value='';
                    document.getElementById('BDV35').checked = false;
                }
            }otherShow();//To close the collapsible checkbox

            navigator.clipboard.writeText(finalText);

            document.getElementById('floatingTextarea').value = '';
            document.getElementById('changeset').value = '';
        }

        //-------------------------------------------------------------------------------------------------------- 

        //Adding alerts----------------------------------------------------------------------------------------

        var i = '';

        //-----------------------------------------------------------------------------------------------------
