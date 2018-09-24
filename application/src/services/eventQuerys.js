import {DB} from './Api'

export async function all(){
  return await DB.get('event/all').then((res) => {
    return res.data
  })
}

export async function byResponsable(responsable){
  return await DB.get('event/responsable/' + responsable).then((res) => {
    return res.data
  })
}

export async function byResponsableAtInterval(responsable, startDate, finalDate){
  return await DB.get('event/responsable/' + responsable + '/' + startDate + '/' + finalDate).then((res) => {
    return res.data
  })
}

export async function atRoom(room){
  return await DB.get('event/room/' + room).then((res) => {
    return res.data
  })
}

export async function atRoom(room, schedule){
  return await DB.post('event/room/' + room, schedule).then((res) => {
    return res.data
  })
}

export async function atRoomAtInterval(room, startDate, finalDate){
  return await DB.get('event/room/' + room + '/' + startDate + '/' + finalDate).then((res) => {
    return res.data
  })
}

export async function atRoomAtInterval(room, schedule, startDate, finalDate){
  return await DB.post('event/room/' + room + '/' + startDate + '/' + finalDate, schedule).then((res) => {
    return res.data
  })
}

export async function byRoomType(roomType){
  return await DB.get('event/room/type/' + roomType).then((res) => {
    return res.data
  })
}

export async function byRoomTypeAtInterval(roomType, startDate, finalDate){
  return await DB.get('event/room/type/' + roomType + '/' + startDate + '/' + finalDate).then((res) => {
    return res.data
  })
}

export async function freeRoomsAtSchedule(schedule){
  return await DB.post('event/freeRooms', schedule).then((res) => {
    return res.data
  })
}

export async function freeRoomsAtScheduleAtIntertal(schedule, startDate, finalDate){
  return await DB.post('event/freeRooms/' + startDate + '/' + finalDate, schedule).then((res) => {
    return res.data
  })
}

export async function freeRoomsByTypeAtSchedule(schedule, roomType, startDate, finalDate){
  return await DB.post('event/freeRooms/type/' + roomType + '/' + startDate + '/' + finalDate, schedule).then((res) => {
    return res.data
  })
}

export async function atInterval(startDate, finalDate){
  return await DB.get('event/atInterval/' + startDate + '/' + finalDate).then((res) => {
    return res.data
  })
}

export async function atScheduleAtInterval(schedule, startDate, finalDate){
  return await DB.post('event/atScheduleAtIntertal/' + startDate + '/' + finalDate, schedule).then((res) => {
    return res.data
  })
}

export async function byId(id){
  return await DB.get('event/' + id).then((res) => {
    return res.data
  })
}