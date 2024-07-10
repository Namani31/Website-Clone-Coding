// struct - page
class PageData{
    m_pageName;
    m_arrPageHtml;

    constructor(data){
        this.m_pageName = data.pageName;
        this.m_arrPageHtml = new Array();
        for(let i = 0; i<data.pageHtml.length; i++){
            this.m_arrPageHtml.push(new HtmlData(data.pageHtml[i]));
        }
    }
}

// struct - element
class HtmlData{

    m_eleName;
    m_dicEleAttr;
    m_strTextContent;
    m_arrChild;

    constructor(data){
        this.m_eleName = data.eleName;
        this.m_dicEleAttr = data.attribute;
        this.m_strTextContent = data.text;
        this.m_arrChild = new Array();
        if(data.child){
            for(let i = 0; i<data.child.length; i++){
                this.m_arrChild.push(new HtmlData(data.child[i]));
            }
        }
    }
}

// page class
// use  class (pageName) extends Page{ }
class Page{

    m_pageName;

    constructor(data){
        if(data != null){
            this.m_pageName = data.m_pageName;
        }
    }

    _createEle(eleStr,attrName = null,attr = null){
        let tmpEle = document.createElement(eleStr);

        if(attrName != null){
            let type = typeof(attrName);

            if(type === "string"){
                tmpEle.setAttribute(attrName,attr);
            }
            else if(type === "object" && attrName.length == attr.length){
                for(let i = 0; i<attrName.length; i++){
                    tmpEle.setAttribute(attrName[i],attr[i]);
                }
            }
            else{
                console.log("createEle error!! - attrName.length : "
                    +attrName.length+" attr.length : "+attr.length);
                return;
            }
        }
        return tmpEle;
    }

    setStyle(ele,styPropName,styProp){
        if(ele != null){
            let type = typeof(styPropName);
            
            if(type === "string"){
                ele.style.setProperty(styPropName,styProp);
            }
            else if(type === "object" && styPropName.length == styProp.length){
                for(let i = 0; i<attrName.length; i++){
                    ele.setProperty(styPropName[i],styProp[i]);
                }
            }
            else{
                console.log("setStyle error!! - styPropName.length : "
                    +styPropName.length+" styProp.length : "+styProp.length);
                return;
            }
        }
    }
}