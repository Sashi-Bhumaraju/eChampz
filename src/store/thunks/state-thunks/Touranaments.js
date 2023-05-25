

const GetUser = createAsyncThunk('tournaments/get', async (uid) => {
    // console.log("this is getting data freom firebase")
    const docRef = doc(db, "user", uid);
    const response = await getDoc(docRef).then((docSnap)=>{

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const data = docSnap.data();
            return data;
          } else {

            console.log("No such document!");
          }
         return docSnap.data(); 
    }) .catch(()=>{ console.log("error")})
    return response;
});
