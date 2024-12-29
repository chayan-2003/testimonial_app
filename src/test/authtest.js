import {auth} from  '@clerk/nextjs/server';
 async  function check()
 {
    const {userId}=await auth();
    if(userId)
    {
        console.log('User is logged in');
    }
    else
    {
        console.log('User is not logged in');
    }
  
 }


check();