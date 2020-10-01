// Function that receive Day, Month, year and convert them to hegirien Calendar
function grtohijri(JO,M,X){
    let S,A,B,C,C1,C2,D,Q,R,I,K,O,H,JJ,N,CL,DL;
    S=Math.floor((Math.floor(X/100)*3-5)/4);
    A=X-623; B=Math.floor(A/4); C=A%4;
    C1=C*365.2501; C2=Math.floor(C*365,2501);
    if(C1-C2 >0.5)
        C2++;  
    D=1461*B+170+C2; Q=Math.floor(D/10631); R=D%10631; 
    I=Math.floor(R/354); K=R%354; O=Math.floor(Math.floor(11*I+14)/30);
    H =30*Q+I+1 ;
     N= (new Date(X, M-1,JO).getTime() - new Date(X,0,1).getTime())/(1000*3600*24);
    N=Math.floor(N)-S+1;
    JJ=K-O+N-1;
    if(JJ>354){
            CL=H%20; DL= (11*CL+3)%30;
        if (DL<19) {
            JJ=JJ-354; H+=1;
        }
        else if (DL>18) {
            JJ=JJ-355; H+=1;
        }     
    }
    if(JJ==0){
        JJ=355; H-=1;
    }
    let i=0; // i +1 represente de months number 
while(JJ>30){
    JJ = (i%2===0) ? JJ-=30 : JJ-=29;
    i++; 
}
if(JJ===30 && i%2===1){
    JJ=1; i++;
} 
   i++; // because count began at 0 
return [JJ,i,H];
}
*/
//grtohijri(1991,8,13);
//grtohijri(1855,9,8);
//grtohijri(2001,4,23);
//grtohijri(1453,5,29);
//console.log(grtohijri(20,9,2020));