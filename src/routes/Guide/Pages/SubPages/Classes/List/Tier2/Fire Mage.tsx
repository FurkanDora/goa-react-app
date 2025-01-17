import React from 'react';

import GuidePage from '../../../../GuidePageComponent';
import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier2/fire_mage/icon.png';
import skillOne from '../../../../../../../img/guide/skills/27.png';
import skillTwo from '../../../../../../../img/guide/skills/28.png';
import skillThree from '../../../../../../../img/guide/skills/62.png';
import skillPassive from '../../../../../../../img/guide/skills/31.png';
import skillUltimate from '../../../../../../../img/guide/skills/30.png';

export default (
  <GuidePage
    right={
      <ClassCard
        name="Fire Mage"
        icon={icon}
        classTier={3}
        element="element.fire"
        weapons={['Wand', 'Staff', 'Dagger']}
        armors={['Cloth', 'Feather', 'Light']}
        damage={10}
        defense={6}
        health={8}
        mana={4}
      />
    }
  >
    <ClassBody
      intro="classes.tier2.fire_mage.intro"
      playstyle="classes.tier2.fire_mage.playstyle"
      skillComponent={
        <Skill
          icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
          names={['Fireball', 'Dragon Breath', 'Blasting Warp', 'Fire Spirit', 'Chaos Meteor']}
          descriptions={[
            'classes.tier2.fire_mage.skill_one',
            'classes.tier2.fire_mage.skill_two',
            'classes.tier2.fire_mage.skill_three',
            'classes.tier2.fire_mage.skill_passive',
            'classes.tier2.fire_mage.skill_ultimate',
          ]}
        />
      }
    />
  </GuidePage>
);
