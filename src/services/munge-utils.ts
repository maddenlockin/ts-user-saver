export function mungeTime(createdTime: string){
  const splitTime = createdTime.split('-')
  
  const month = splitTime[1];
  const year = splitTime[0];

  const dayString = splitTime[2];
  const day = dayString[0] + dayString[1]
  
  const date = month + '/' + day + '/' + year;
  return date;
}

