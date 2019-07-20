class Result {

    /*
     * Complete the 'findDay' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts following parameters:
     *  1. INTEGER month
     *  2. INTEGER day
     *  3. INTEGER year
     h is the day of the week (0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday)
    q is the day of the month
    m is the month (3 = March, 4 = April, 5 = May, ..., 14 = February)
    K the year of the century
    J is the zero-based century (actually {\displaystyle \lfloor year/100\rfloor } \lfloor year/100\rfloor ) For example, the zero-based centuries for 1995 and 2000 are 19 and 20 respectively (to not be confused with the common ordinal century enumeration which
     */

    public static String findDay(int month, int day, int year) {
        double K = year % 100;
        double J = Math.floor(year/100);
        double q1 = Math.floor((13*(1+month))/5);
        double q2 = Math.floor(K/4);
        double q3 = Math.floor(J/4);
        int h = ((day + q1 + K + q2 + q3 - (2.0*J)) % 7);
        int d = ((h + 5) % 7); // day

        String[] days = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"}

        return days[d];
    }

}
