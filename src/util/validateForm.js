export default function validateForm(values) {
    let errors = {};
    
    if(!values.title){
        errors.title = "Title is required";
    }
    if(!values.author){
        errors.author = "Author is required!";
    }
    if(!values.isbn){
        errors.isbn = "ISBN is required!";
    }
    if(!values.publisher){
        errors.publisher = "Publisher is required"
    }
    if(!values.published){
        errors.published = "Published date is required"
    }
    if(!values.pagesNumber){
        errors.pagesNumber = "PageNumber is required"
    }
    if(!values.format){
        errors.format = "Format is required"
    }
    if(!values.edition){
        errors.edition = "Edition is required"
    }
    if(!values.language){
        errors.language = "Language is required"
    }
    if(!values.description){
        errors.description = "Description is required"
    }
    return errors;
}