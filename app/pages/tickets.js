import header from '../assets/badges.jpg';
import { Link } from 'react-router';
import { Page, PageHeading, Container } from '../components/page';
import { Block, Column, ColumnHeading, P } from '../components/textblock';

export default () => (
    <Page>
        <PageHeading background={header}>
            Get your JavaZone 2016 Tickets
        </PageHeading>

        <Container>
            <div className='textblock textblock--centered'>
                <div className='textblock__column textblock__column--centered'>
                    <div className='textblock__text textblock__text--fill'>
                        <h2 className='textblock__title'>Join us for the 15th JavaZone, <br /><a className='tickets__buy-link' href="https://www.eventsystems.no/es/event/javazone2016">buy your ticket today</a></h2>
                    </div>
                </div>
            </div>

            <ul className='tickets__types'>
                <li className='tickets__type'>
                    <a href='https://www.eventsystems.no/es/event/javazone2016' className='tickets__link'>
                        <div><span className='tickets__icon icon-tag'></span></div>
                        <div className='tickets__title'>Regular Ticket</div>
                        <div className='tickets__price'>6&nbsp;590 NOK</div>
                        <div className='tickets__vat'>plus VAT</div>
                    </a>
                </li>
                <li className='tickets__type'>
                    <a href='https://www.eventsystems.no/es/event/javazone2016' className='tickets__link'>
                        <div><span className='tickets__icon icon-tag'></span></div>
                        <div className='tickets__title'>javaBin Member Ticket</div>
                        <div className='tickets__price'>5&nbsp;590 NOK</div>
                        <div className='tickets__vat'>plus VAT</div>
                    </a>
                </li>
            </ul>

            <Block>
                <Column>
                    <ColumnHeading>Special ticket types</ColumnHeading>
                    <dl className='speakers__accepted'>
                        <dt className='speakers__accepted-title'>Working for one of our partners?</dt>
                        <dd className='speakers__accepted-description'>Partners may buy tickets at reduced prices until July 1st. <Link to='partners'>Read more about partnerships</Link> of JavaZone and contact us at <a href='mailto:partner@java.no'>partner@java.no</a> to buy tickets.</dd>
                        <dt className='speakers__accepted-title'>Need more than one ticket?</dt>
                        <dd className='speakers__accepted-description'>Multiple tickets might be bought at the same time. You can then assign the tickets to the participants by using their email. You can manage your tickets by logging into our webshop.</dd>
                        <dt className='speakers__accepted-title'>Need an invoice?</dt>
                        <dd className='speakers__accepted-description'>Paying by invoice can be accommodated if you need that (contact <a href="mailto:javazone@java.no">javazone@java.no</a>), but please consider buying the tickets using the webshop if you can. You’ll get a receipt which can be used for reimbursements even though you pay with your personal credit card.</dd>
                    </dl>
                </Column>
                <Column>
                    <ColumnHeading>About the javaBin tickets</ColumnHeading>
                    <P justify={true}>
                        If you are a member of javaBin, you can buy your ticket to a reduced price. Both ticket types gives full access to the conference, but javaBin-tickets are discounted by NOK 1000,–
                    </P>
                    <P justify={true}>
                        We fully recommend that you consider a membership before buying your ticket. Anyone is welcome to join javaBin, we have more than 2.000 members from all over the country.
                    </P>
                    <P justify={true}>
                        You can read more and buy your membership at <a href="http://java.no/index.html?page=medlemskap">java.no</a>.
                    </P>
                </Column>
            </Block>
        </Container>
    </Page>
);
