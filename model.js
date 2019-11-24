function newModel()
{
  console.log("newModel");
  return {
    theme : 'light',
    player : {
    cash : 90,
    peakCash : 90,
    portfolio : {
      'wool' : 0,
      'gold' : 0
    }
    },
    resources : [
    { name : 'wool',
      price : 10,
      inherentValue : 1
    },
    { name : 'gold',
      price : 100,
      inherentValue : 10
    }
    ],
    unlocks : [
    {
      type : 'button',
      from : 1000,
      name : 'buy10',
      unlocked : false
    },
    {
      type : 'button',
      from : 1000,
      name : 'sell10',
      unlocked : false
    },
    {
      type : 'button',
      from : 10000,
      name : 'buyAll',
      unlocked : false
    },
    {
      type : 'button',
      from : 10000,
      name : 'sellAll',
      unlocked : false
    },
    {
      type : 'button',
      from : 20000,
      name : 'short',
      unlocked : false
    }
    ]
  };
}