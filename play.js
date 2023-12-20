chrome.contextMenus.create({
    id:"",
    title:"",
    contexts:""
})

chrome .contextMenus.onClicked.addListener(function (info, tab) {
    if(info.menuItemId){
        //`${info.menuItemId} ${variableName}`
        //const variableName = info.selectionText;
        //chrome.tabs.create({ url: });
    }
});