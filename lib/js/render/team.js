
export default class Team{
    constructor(team_obj){
        this.name= team_obj.name
        this.pos = team_obj.pos
        this.img = team_obj.img
        this.social = {
            fb: team_obj.fb !== '' ? team_obj.fb: '#',
            tw: team_obj.tw !== '' ? team_obj.tw : '#', 
            li: team_obj.li !== '' ? team_obj.li : '#' 
        }
    }

    build_element(){
        let carousel = document.createElement('div')
            let team_member = document.createElement('div')
            let image = document.createElement('img')
            let name = document.createElement('h4')
            let pos = document.createElement('p')
            let networks = document.createElement('ul')
                let fb = document.createElement('li')
                let tw = document.createElement('li')
                let li = document.createElement('li')


        ///set attributes
        carousel.setAttribute('class', 'carousel-item col-md-4 carousel-item')
        team_member.setAttribute('class', 'team-member')
        image.setAttribute('class', 'mx-auto rounded-circle')
        image.setAttribute('src', this.img)
        pos.setAttribute('class', 'text-muted')
        pos.appendChild(document.createTextNode(this.pos))
        networks.setAttribute('class','list-inline social-buttons')

        fb.setAttribute('class', 'list-inline-item')
        tw.setAttribute('class', 'list-inline-item')
        li.setAttribute('class', 'list-inline-item')

        fb.appendChild(document.createElement('a'))
        fb.firstChild.setAttribute('href',this.social.fb)
        fb.firstChild.appendChild(document.createElement('i'))
        fb.firstChild.firstChild.setAttribute('class','fab fa-facebook')

        tw.appendChild(document.createElement('a'))
        tw.firstChild.setAttribute('href',this.social.tw)
        tw.firstChild.appendChild(document.createElement('i'))
        tw.firstChild.firstChild.setAttribute('class','fab fa-twitter')

        li.appendChild(document.createElement('a'))
        li.firstChild.setAttribute('href',this.social.li)
        li.firstChild.appendChild(document.createElement('i'))
        li.firstChild.firstChild.setAttribute('class','fab fa-linkedin')

        name.appendChild(document.createTextNode(this.name))
        
        networks.appendChild(fb)
        networks.appendChild(tw)
        networks.appendChild(li)

        team_member.appendChild(image)
        team_member.appendChild(name)
        team_member.appendChild(pos)
        team_member.appendChild(networks)
        carousel.appendChild(team_member)

        return carousel
    }

}