import { useEffect } from 'react';
function Contact({ title }) {
    useEffect(() => {
        document.title = title;
    }, []);
    return <p>contact</p>;
}

export default Contact;
