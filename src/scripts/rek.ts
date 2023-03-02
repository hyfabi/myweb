import type {Ref} from "vue";
import {ref} from "vue";

let textNow : Ref<string> | null = null
let btnNow : Ref<{text: string, after: any}[]> | null = null
let state = null;

let allowNextRD : Ref<boolean> = ref(true);

export function removeRD(){
  allowNextRD.value = false;
}

export function start(data : any, textRef : Ref<string>, btnRef?: Ref<{text: string, after: any}[]>){
  wait(1, data);
  textNow = textRef;
  btnNow = btnRef ?? null;
}

export function rek(data : any){
  if(btnNow !== null)
    btnNow.value = [];
  if(data.text !== undefined)
    write(data.text);
  if(data.wait !== undefined)
    wait(data.wait, data.after)
  if(data.redirect !== undefined)
    redirect(data.redirect)
  if(data.choice !== undefined)
    choice(data.choice)
}

//Need "text"
function write(text : string){
  if(textNow !== null)
    textNow.value = text
  else
    console.debug("Text Ref Null!")
}

//If "wait" => Always "after"
function wait(time : number, data : any){
  setTimeout(function () {
    rek(data);
  }, time * 1000);
}

function redirect(link : string){
  if(allowNextRD.value)
    window.location.replace(link);
  allowNextRD.value = true;
}

function choice (choices : {text: string, after: any}[]){
  if(btnNow !== null) {
    btnNow.value = choices
  }else
    console.debug("Btn Ref Null!")
}