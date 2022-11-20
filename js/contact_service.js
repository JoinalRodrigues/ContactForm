// Provide persistence solution code here
export function sendData(contact){

    let xhr=new  XMLHttpRequest();   
    xhr.onreadystatechange=function(){
    if(this.readyState==4 && this.status==201){
    console.log("data added successfully");    
    }   
    };
    
    xhr.open("POST","https://fir-demo-df4ee-default-rtdb.firebaseio.com/contacts.json",true);
    xhr.setRequestHeader("content-Type","application/json;charset=UTF-8");
    xhr.send(JSON.stringify(contact));
    };

export function showPersistedData(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fir-demo-df4ee-default-rtdb.firebaseio.com/contacts.json", true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            [...document.getElementById('contact-list').children].forEach(child => child.remove());
            let responseObj = JSON.parse(this.responseText); 
            Object.keys(responseObj).forEach(obj => {
                let newList = document.createElement("ul");
                let ListItems = Object.keys(responseObj[obj]).filter(key => key != 'id').map(item =>{
                    let li = document.createElement("li");
                    li.innerText = `"${item}" : "${responseObj[obj][item]}"`;
                    return li;
                }).forEach(li => newList.appendChild(li));
                document.getElementById("contact-list").appendChild(newList);
            }
        );
        }

    }
    };