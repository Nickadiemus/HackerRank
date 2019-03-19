function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
     * followed by one or more letters.
     */
     let re = new RegExp(/^([MDE]r|Mr?s?)\.[a-zA-Z]+$/);

    /*
     * Do not remove the return statement
     */
     console.log(re.test("MrsDSS"));
    return re;
}

regexVar()
