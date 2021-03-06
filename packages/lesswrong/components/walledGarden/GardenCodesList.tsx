import React from 'react';
import { useMulti } from '../../lib/crud/withMulti';
import { Components, registerComponent } from '../../lib/vulcan-lib';
import { useCurrentUser } from '../common/withUser';

export const GardenCodesList = ({classes, limit, personal=false}: {
  classes:ClassesType,
  limit?: number,
  personal?: boolean
}) => {
  const { GardenCodesItem } = Components
  const currentUser = useCurrentUser()
  
  const terms: GardenCodesViewTerms = personal ?
    {view:"userGardenCodes"} : 
    {view:"semipublicGardenCodes", types: ['public', 'semi-public']}
  
  const { results } = useMulti({
    terms: {
      userId: currentUser?._id,
      ...terms
    },
    enableTotal: false,
    fetchPolicy: 'cache-and-network',
    collectionName: "GardenCodes",
    fragmentName: 'GardenCodeFragment',
    limit: limit || 8
  });
  
  
  return <div>
    {results
      ?.filter(code => personal ?
        code.type=='private' : 
        (currentUser?.walledGardenInvite || code.type=='public')
      ) //for personal list, only show private events; for public list, show all public/semipublic events depending on membership
      .map(code=><GardenCodesItem key={code._id} gardenCode={code}/>)}
  </div>
}

const GardenCodesListComponent = registerComponent('GardenCodesList', GardenCodesList);

declare global {
  interface ComponentTypes {
    GardenCodesList: typeof GardenCodesListComponent
  }
}
