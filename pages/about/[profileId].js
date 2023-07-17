import { useRouter } from "next/router"
function MyProfile(){
    const router=useRouter();
    
    return<div><h1>MyProfile{router.query?.profileId}</h1></div>
}
export default MyProfile