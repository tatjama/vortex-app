export const maxDate = () => {
    const maxDate = new Date().toLocaleDateString('en').split('/');
    return maxDate[2] + '-' + maxDate[0].padStart(2, '0') + '-' + maxDate[1].padStart(2, '0');    
} 