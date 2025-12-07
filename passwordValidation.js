/*Problem: Check the strength of the password entered by the user and classify if it is a strong password or a weak password.
1	Allowed symbols  are:  &~!@#$%^*_-
2	Length should be greater than or equal to 8
3	Can have letters from [a-z] & [A-Z]
4	Number should be a positive number(i.e. >= 0)
5	Empty space will be treated as a valid character
*/
/*Solution: 
1	Get the password from user & store it in variable "user_inp", also Initialize a strength_score variable with value 0 to count the strength 
2	Check if "user_inp" = ""
	2a. Print the message "Enter Valid Password". End
	2b. Else call the 5 functions to check if the password contains lowercase letter, uppercase letter, number, symbol & length is greater than 8
	2b.1. Call lowercase_Check function : that will check if password contains atleast one lowercase letter, update the strength_score by 2 & return the score
	2b.2. Call uppercase_Check function : that will check if password contains atleast one uppercase letter, update the strength_score by 2 & return the score
	2b.3. Call number_Check function : that will check if password contains atleast one number, update the strength_score by 2 & return the score
	2b.4. Call symbols_Check function : that will check if password contains atleast one symbol, update the strength_score by 2 & return the score
	2b.5. Call length_Check function : that will check if password length is greater than or equal to 8, update the strength_score by 2 & return the score
3	Check if strength_score >= 10 
	3a. If true, print "Strong". End
	3b. Else, print "Weak" and print a message "Password must have atleast 1 uppercase letter [A-Z], 1 lowercase letter [a-z] and 1 number [0-9] and 1 special characters [~!@#$%^&*_-] and be atleast 8 characters long. ". End.
    */
   const prompt = require('prompt-sync')();
   const user_inp = prompt('Enter the password :');
   let strength_score = 0;
   
   function length_Check(password){
        if(password.length >= 8){
            strength_score += 2;
        }
   }
   
   function lowercase_Check(password){
        if(/[a-z]/.test(password)){
            strength_score += 2;
        }
   }

   function uppercase_Check(password){
        if(/[A-Z]/.test(password)){
            strength_score += 2;
        }
   }

   function number_Check(password){
        if(/\d/.test(password)){
            strength_score += 2;
        }
   }

   function symbols_Check(password){
        if(/[&~!@#$%^*_\-]/.test(password)){
            strength_score += 2;
        }
   }
   
   if(user_inp === ""){
        console.log('Enter Valid Password');
   }
   else{
        lowercase_Check(user_inp)
        uppercase_Check(user_inp)
        number_Check(user_inp)
        symbols_Check(user_inp)
        length_Check(user_inp)
   }

   if(strength_score >= 10){
        console.log(`Enter password ${user_inp} is Strong.`);
   }
   else{
        console.log(`Entered password ${user_inp} has gained ${strength_score} score & hence password is Weak.`, 'Password must have atleast 1 uppercase letter [A-Z], 1 lowercase letter [a-z] and 1 number [0-9] and 1 special characters [~!@#$%^&*_-] and be atleast 8 characters long.');
   }