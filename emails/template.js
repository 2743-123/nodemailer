exports.welcomeTemplate = (name) => {
    <div>
        <h2>welcome , ${name}!</h2>
        <P> Thanks for registring at <strong>World best places</strong> .</P>
        <hr />
        <small>This is an automated Email , Please don't reply </small>
    </div>
};

exports.forgotPasswordTeplate = ( link) => {
    <div>
        <h2> password reset </h2>
        <p> Click below to reset yout password </p>
        <a href="${link}"> ${link}</a>
        <hr />
        
    </div>
}