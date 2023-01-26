import React from 'react'
import './header.scss'

const links = [
  {
    name: 'Cursos',
    attributes: {
      href: 'https://codely.tv/pro/cursos',
      rel: 'noopener',
    },
  },
  {
    name: 'Empresas',
    attributes: {
      href: 'https://codely.tv/pro/teams',
      rel: 'noopener',
    },
  },
  {
    name: 'Comunidades',
    attributes: {
      href: 'https://codely.tv/pro/comunidades',
      title: 'Patrocinio comunidades de desarrollo',
      rel: 'noopener',
    },
  },
  {
    name: 'YouTube',
    attributes: {
      href:
        'https://www.youtube.com/CodelyTV?utm_source=home&amp;utm_medium=landing&amp;utm_campaign=internal&amp;utm_content=header-menu',
      rel: 'nofollow noopener',
      target: '_blank',
    },
  },
  {
    name: 'Blog',
    attributes: {
      href: 'https://codely.tv/blog',
      rel: 'noopener',
    },
  },
  {
    name: 'Contacta',
    attributes: {
      href: 'mailto:soporte@codely.tv?Subject=[CodelyTV] Contacto web',
      rel: 'nofollow noopener',
    },
  },
  {
    name: 'Inicia sesión',
    attributes: {
      href:
        'https://pro.codely.tv/auth/sign-in/?utm_source=home&amp;utm_medium=landing&amp;utm_campaign=internal&amp;utm_content=header-menu',
      rel: 'nofollow noopener',
    },
  },
  {
    name: 'Suscríbete',
    attributes: {
      href: 'https://codely.tv//pro/cursos',
      rel: 'noopener',
    },
  },
]

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        {/* <nuxt-link to="/">
          <img
            className="nav-logo"
            src="~/assets/images/logo-codelytv.png"
            alt="CodelyTV"
          />
        </nuxt-link> */}

        <button aria-label="Ver menú" className="burger">
          {/* <Burger /> */}
        </button>
        <ul className="nav-menu">
          {links.map((link)=> {
            return <li key={link.name}> {link.name} </li>             
          })}
          {/* <li v-for="link in links" key="link.name">
            <a v-bind="link.attributes">{{ link.name }}</a>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header
