import React, { useEffect, useState } from "react";

function DepthOne(){
    let a = {
        'a' : 1,
        'b' : 2,
        'f' : 5
    }
    let b = {
        'c' : 2,
        'b' : '2',
        'f' : 5
    }

    let [html, setHtml] = useState([]);

    const notType = {
        background : 'blue'
    }
    
    const allNot = {
        background : 'red'
    }

    const not = {
        background : 'gray'
    }

    let copy = {...b};
    useEffect( () => {
        let temp = [];
        for(let key in a){
            if(b.hasOwnProperty(key)){
                if(a[key] === b[key]){   // 프로퍼티와 벨류가 다 맞을 경우
                    temp.push([<p>{key} : {b[key]}</p>])
                    temp.push([<p>{key} : {a[key]}</p>])
                }else if(typeof(a[key]) != typeof(b[key])){  // 벨류의 타입이 다를 경우
                    temp.push([<p style={notType}> {key} : {b[key]} (B NOT Type) </p>])
                    temp.push([<p style={notType}> {key} : {a[key]} (A NOT Type) </p>])
                }else if(a[key] != b[key]){ //  벨류의 값이 다른 경우
                    temp.push([<p style={not}> {a[key]} NOT {b[key]}</p>])
                    temp.push([<p style={not}> {b[key]} NOT {a[key]}</p>])
                }
                delete copy[key];
            }else{
                if(!b.hasOwnProperty(key)){
                    temp.push([<p style={allNot}>{key} : {a[key]}</p>])
                }
                for(let kk in copy){
                    temp.push([<p style={allNot}>{kk} : {copy[kk]}</p>])
                }
            }
        }
        setHtml(temp)
    }, [])

    return(
        <div>
            { html.map((html, idx) => (
                <>
                    {html}
                </>
            ))}
        </div>
    )

}

export default DepthOne;