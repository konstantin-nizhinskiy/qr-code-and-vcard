function getSocialUrls(type,user) {
    switch (type.toLowerCase()){
        case 'facebook': return 'https://facebook.com/'+user;
        case 'linkedin': return 'https://linkedin.com/'+user;
        case 'twitter': return 'https://twitter.com/'+user;
        case 'flickr': return 'https://flickr.com/'+user;
        case 'skype': return 'x-apple:'+user;
        default:  return 'https://www.'+type+'.com/';
    }
}