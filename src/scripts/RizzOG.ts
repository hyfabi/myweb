import RizzRecord from "@/models/Rizz";
import {useRoute} from "vue-router";
import {Ref} from "vue";


export function load(data : RizzRecord[], display?: Ref<{text: string, type: string}>) : string | null {
  let id : number | undefined = useRoute()?.params?.id as unknown as number;
  let text : string = "??";
  let type: string = "??";

  if(id + "" == "" || id == undefined)
    id = Math.floor(Math.random() * data.length)

  if(id >= data.length || Math.floor(Math.random() * 200) == 69){
    text = "Du befindest dich auf meiner Webseite.... Pass auf....Ich sehe dich!"
    type = "~Fabian"
  }else {
    text = data[id]?.text
    if(data[id]?.type != null)
      type = `(${data[id]?.type})`;
  }

  if(display){
    display.value.text = text;
    display.value.type = type
  }

  return text
}