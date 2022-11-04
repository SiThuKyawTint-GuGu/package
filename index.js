export const myname = 'Si Thu Kyaw Tint';
export const showmyname = (name=myname) => console.log(name);
export const showmynameui = (name = myname,top=0,right=0) => {
    const div = document.createElement("div");
    div.style.color = 'white';
    div.style.position = 'fixed';
    div.style.top =top;
    div.style.right =right;
    div.style.fontSize = '20px';
    div.style.backgroundColor = 'black'
    div.innerHTML = `<h1>${name}</h1>`;
}