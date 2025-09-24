function number (a, b, c) {
    if (a > b && c) {
        return a;
    } 
    
    if (b > c && a) {
        return b;
    }
    
    if (c > b && a) {
        return c;
    }
}

console.log (number(8000, 2200, 5500));