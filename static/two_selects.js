function addOption(theSel, theText, theValue)
{
	var newOpt = new Option(theText, theValue);
	var selLength = theSel.length;
	console.log(" addOption theSel: " + theSel +   "selLength: " + selLength); // + "  " + theSel.options[selLength]);
	theSel.options[selLength] = newOpt;
}

function deleteOption(theSel, theIndex)
{
	var selLength = theSel.length;
	console.log("deleteOption length: " + selLength + "    theIndex:" + theIndex);
	if(selLength>0)
	{
		theSel.options[theIndex] = null;
	}
}

function moveOptions(theSelFrom, theSelTo, deleteFlag) {
    console.log("moveOptions theSelFrom, theSelTo:  " + theSelFrom + "  " + theSelTo );

    var selLength = theSelFrom.length;
    var selectedText = new Array();
    var selectedValues = new Array();
    var selectedCount = 0;

    var i;

    // Find the selected Options in reverse order
    // and delete them from the 'from' Select.
    for (i = selLength - 1; i >= 0; i--) {
        if (theSelFrom.options[i].selected) {
            selectedText[selectedCount] = theSelFrom.options[i].text;
            selectedValues[selectedCount] = theSelFrom.options[i].value;
            if (deleteFlag) {
                deleteOption(theSelFrom, i);
            }
            selectedCount++;
        }
    }

    // Add the selected text/values in reverse order.
    // This will add the Options to the 'to' Select
    // in the same order as they were in the 'from' Select.
    for (i = selectedCount - 1; i >= 0; i--) {
        console.log("theSelTo, selText, selValue: " + theSelTo + "  " + selectedText[i] + "    " + selectedValues[i]);
        console.log("theSelTo.length:  " + theSelTo.length);
        addOption(theSelTo, selectedText[i], selectedValues[i]);
    }
}