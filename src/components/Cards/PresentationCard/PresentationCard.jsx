import React from 'react'
import { CardContainerStyed, ContainerButtonSkill, ContainerPresentationCard, ContiainerImgStyled, ItemsContianerStyled, ItemsStyled, PageInfromatinContainer } from './PresentationCardStyled'
import AboutProfile from '../../AboutMeContainer/AboutProfile'
import Casa from '../../../assets/casaPlus.png'
import BtnSkill from './BtnSkill'
import Title from '../../Title/Title'
import Text from '../../Text/Text'
const PresentationCard = () => {
  return (
    <ContainerPresentationCard>
        <CardContainerStyed>
            <ItemsContianerStyled>
                <ItemsStyled/>
                <ItemsStyled/>
                <ItemsStyled/>
            </ItemsContianerStyled>
            <PageInfromatinContainer>
                <Title title={'Casa Plus'}/>
                <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolore porro mollitia quas earum praesentium cum, obcaecati explicabo possimus, quasi non itaque quidem necessitatibus adipisci, rerum recusandae amet hic fuga?
                    Numquam eveniet nobis velit sit rerum, consequuntur voluptas ut ex quibusdam tempora porro ea ad adipisci sed modi, sequi ratione dolore totam assumenda. Deleniti omnis iure optio officia repellendus voluptatem.
                    Quam architecto nobis expedita tempore reiciendis? Id libero ad voluptas possimus ipsam totam quae repellendus enim perspiciatis sequi nemo, consequatur necessitatibus optio distinctio perferendis quam blanditiis odio? Perspiciatis, laboriosam omnis?
                    Animi, dolore, quod numquam molestias, nemo ipsum fuga harum obcaecati illum distinctio provident! Et cumque minus atque minima labore quo placeat earum consectetur reiciendis, magnam neque cupiditate voluptatibus molestias aliquid!
                    Debitis facere dolorem saepe iste autem. Ducimus illum assumenda distinctio, ex ut et quo tempore cumque adipisci vitae totam, blanditiis, at deleniti! Molestias et accusantium unde ut. Id, quaerat consequuntur!
                    Ipsa magnam possimus deleniti, placeat quisquam aliquid! Dolorem sequi odit laborum quasi minima, cum deleniti quis minus dolorum ad repellendus nostrum libero expedita, at quaerat odio dolore fuga illum illo?
                    Impedit labore nemo hic consequatur ducimus ratione repellendus enim nam reprehenderit eos eius, nostrum similique? Quo, accusantium esse animi, tenetur blanditiis asperiores ipsa magnam iusto similique expedita mollitia. Natus, iure!
                    Quae autem soluta alias odit cum officia voluptates. Ducimus labore praesentium, sed fugiat inventore porro iste quasi, laboriosam ipsa nulla voluptate aperiam? Dolores in, fugiat esse tempore ratione reiciendis corporis?
                    Quod corrupti explicabo rem neque eius sunt deserunt voluptas architecto enim. Dolorum nemo perspiciatis corrupti eaque aliquam rerum animi quidem debitis esse, fugiat perferendis non? Ipsam non impedit iste illo.
                    Ab fugiat odit aperiam rem necessitatibus voluptatum, doloremque quasi dolore porro quibusdam et neque sed at itaque, obcaecati tenetur. Reprehenderit temporibus iure inventore deleniti fugiat voluptates autem dolor nemo voluptatibus.
                </Text>
            </PageInfromatinContainer>
            <ContiainerImgStyled>
                <AboutProfile img={Casa} />
                <ContainerButtonSkill>
                    <BtnSkill img={''}/>
                    <BtnSkill img={''}/>
                </ContainerButtonSkill>
            </ContiainerImgStyled>
        </CardContainerStyed>
    </ContainerPresentationCard>
  )
}

export default PresentationCard