export interface Product {
  productId: string;
  name: string;
  description: string;
  descriptionLong: string;
  imageUrl: string;
  price: number;
}

export const products: Product[] = [
  {
    productId: 'fendt-f20',
    name: 'Fendt Dieselross F20',
    description:
      'Proin diam justo, tempor sollicitudin sodales eget, molestie ultricies lectus. Sed non sagittis ligula. Nulla facilisi. Nam commodo elit vestibulum leo fringilla, sit amet consequat.',
    descriptionLong:
      'Aliquam feugiat nunc a auctor congue. Nunc tortor tellus, suscipit ac odio a, laoreet dictum metus. Donec nec quam sem. Mauris ut commodo lacus. Curabitur dapibus mauris a arcu ullamcorper venenatis. Curabitur rutrum scelerisque magna, sit amet tempor neque ultricies non. Vestibulum ac ultrices urna. Praesent sed nisi sed elit maximus malesuada eu non mi.\n' +
      'Sed ut consequat ante. Phasellus fringilla rhoncus leo vel interdum. Integer vulputate est leo, id sodales orci faucibus eu. Duis sit amet augue sit amet metus semper ultricies sit amet quis odio. Sed lobortis, tortor ut volutpat ultricies, eros libero sollicitudin elit, ut congue purus mi ac ipsum. Aenean pharetra tristique erat sed convallis. Suspendisse dui sem, porta fermentum lorem vel, viverra aliquet sem. In dapibus magna tristique metus luctus, convallis varius diam auctor. Quisque sed venenatis nunc, vestibulum dapibus quam. Sed nec volutpat lorem. Morbi at aliquam justo, nec ullamcorper nunc. Curabitur maximus porta leo ac vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\n' +
      'Integer venenatis eleifend tellus, vel consequat arcu tempus quis. Nam sagittis, dui ut maximus feugiat, dolor mi finibus tortor, nec convallis sapien dolor eu ipsum. Mauris sed vestibulum nulla. Suspendisse potenti. Donec tincidunt ex ac enim laoreet lacinia. Morbi risus lectus, efficitur sed magna in, pharetra tincidunt neque. In accumsan tristique leo sed interdum.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Fendt_DieselrossF20G_20PS_1952.JPG',
    price: 34_999,
  },
  {
    productId: 'jd-45-250-hp',
    name: 'John Deere 45-250 HP',
    description:
      'Integer sem orci, ullamcorper sodales ultrices eu, consectetur ut erat. Sed at ultricies turpis, eget suscipit neque. Nulla sit amet augue sodales, egestas ipsum vel.',
    descriptionLong:
      'Sed ipsum turpis, scelerisque sagittis commodo eget, volutpat porttitor magna. Phasellus ultrices suscipit lorem, id dignissim sem pharetra eget. Maecenas a consectetur purus, quis aliquet massa. Proin et mi sed tellus sollicitudin sollicitudin. Donec nec placerat nisl, sit amet auctor sem. Nullam neque sem, sodales at nisl ac, convallis congue ipsum. Cras eget pulvinar ante. Suspendisse potenti.\n' +
      'Phasellus scelerisque erat a elementum porta. Cras blandit, tellus eget convallis elementum, leo urna ornare urna, quis tempus nisi ligula sit amet nisi. Sed et ligula porttitor, ultrices lectus ac, auctor risus. Mauris tristique urna volutpat mauris gravida, vitae efficitur urna vulputate. Nunc condimentum placerat mi, non pellentesque sapien vehicula vel. Donec lacus turpis, feugiat ut augue ac, dictum fermentum libero. Maecenas elementum sed eros in gravida.\n' +
      'Vestibulum justo ante, volutpat eget accumsan in, lobortis in neque. Vestibulum aliquam lacus fermentum pharetra tincidunt. Integer pulvinar porttitor sapien. Integer facilisis, diam quis volutpat cursus, nunc ipsum aliquet nibh, eget varius felis ipsum varius lectus. Etiam volutpat, metus vitae ornare pulvinar, nulla elit pellentesque orci, id viverra augue nisi vitae velit. Donec nibh velit, aliquam ut lacinia ac, aliquam nec nisi. Pellentesque et dignissim quam. Etiam eu massa non ipsum imperdiet commodo. Sed lacinia nibh nec leo consequat auctor. Sed aliquet semper est nec commodo. Nulla sit amet tempor ipsum, eget faucibus nibh. Nulla ac tellus eget ante congue pulvinar. Morbi sit amet elementum nisi. Praesent non erat maximus, aliquet lectus sit amet, rutrum sapien. Duis in accumsan metus.',

    imageUrl:
      'https://www.deere.com/assets/images/region-4/products/tractors/utility-tractors/product-slider/utilitytractors-r4d035578-776x436.jpg',
    price: 51_799,
  },
  {
    productId: 'deuz-agr-130',
    name: 'Deutz-Fahr Agrotron 130',
    description:
      'Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ultrices sed lorem sit amet consequat. Proin ac interdum nisi, et vehicula ex. Ut.',
    descriptionLong:
      'Quisque sed est lorem. Phasellus aliquam nisl et turpis aliquet pellentesque. Fusce molestie odio eget ex sollicitudin fermentum. Aliquam erat volutpat. Pellentesque nec elit a justo consectetur ullamcorper interdum id ante. Nam pretium ante eget gravida tempor. Aliquam sed ante eget est bibendum feugiat sit amet non nisi. Aenean nisi dolor, elementum sed volutpat vel, pellentesque ac lectus. Morbi rutrum, ex sit amet viverra euismod, ex augue mattis massa, eu rhoncus mi urna non nisl.\n' +
      'Vivamus hendrerit, lectus eu fringilla congue, tellus nunc elementum dui, quis feugiat augue nisi ut nisl. Aliquam nulla lectus, vestibulum quis vestibulum quis, tempor vel diam. Sed diam risus, elementum nec euismod at, accumsan ut urna. Fusce vehicula tortor sed ex pellentesque pretium. Fusce enim mauris, iaculis vel odio non, commodo ullamcorper justo. Nunc elementum arcu viverra, vehicula urna vitae, fringilla tellus. Aenean condimentum aliquam porta. Duis augue elit, volutpat id ullamcorper a, mattis in orci. Duis enim nulla, viverra dictum gravida a, sodales vitae sapien. Pellentesque hendrerit pellentesque leo, vel pharetra orci facilisis sed. Sed quis sem velit. Maecenas non feugiat nulla. Donec tincidunt pellentesque massa, eu tristique ante mattis ut. Maecenas eget nunc eros.\n' +
      'Nam ut mauris congue, placerat libero ut, maximus turpis. Donec ligula eros, cursus et felis non, fringilla fermentum dui. Suspendisse eu vulputate metus. Proin imperdiet mollis mauris, eget viverra risus bibendum et. Sed eleifend nec neque sed rhoncus. Praesent non mi felis. Curabitur ornare mattis ipsum quis sollicitudin. Etiam congue, risus in laoreet fringilla, augue risus tincidunt ex, hendrerit dignissim nisl dui non metus. Sed pellentesque ante non egestas vehicula. Nunc fringilla congue aliquam. Aliquam erat volutpat. Sed ornare felis quis turpis rutrum condimentum. Nunc vel sapien sem. Nulla semper imperdiet est vitae iaculis. In eros felis, rutrum ac luctus nec, venenatis vel arcu.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Deutz-Fahr_Agrotron_130.jpg',
    price: 12_499,
  },
  {
    productId: 'claas-3800',
    name: 'Claas Xerion 3800 Trac VC',
    description:
      'Morbi feugiat velit quis ipsum dapibus blandit. Sed at porttitor metus, euismod congue justo. Aenean eu ultricies arcu. Vivamus eget ante et ipsum finibus blandit.',
    descriptionLong:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Suspendisse suscipit ligula eget velit hendrerit luctus. Sed enim arcu, lobortis id magna in, egestas vehicula nunc. Phasellus a viverra nulla. Donec vel eros eu odio volutpat porttitor in non metus. Vestibulum congue vel urna semper volutpat. Sed suscipit, tortor a scelerisque hendrerit, odio lectus euismod elit, ut ultricies mauris nisl in nunc. Aenean tincidunt finibus augue vel aliquet. Aenean accumsan vitae nunc at tempus. Proin at turpis id velit egestas rhoncus. Vivamus hendrerit erat at justo pretium venenatis. In eget justo eu metus dignissim elementum vitae et justo.\n' +
      'Integer cursus quam nibh, id aliquam lacus pretium eu. Integer at mauris nulla. Nullam tincidunt neque at vulputate fringilla. Vestibulum quis est eget turpis feugiat rhoncus. Aliquam dapibus lobortis pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque tincidunt, leo vitae consectetur ultricies, odio augue accumsan metus, in ultricies lacus mi sed tellus. Curabitur sodales vel felis id finibus. Praesent vel purus lacinia, interdum metus ut, semper erat. Maecenas feugiat bibendum dui. Vestibulum sollicitudin condimentum lorem ut mollis.\n' +
      'Proin lorem mi, tincidunt in venenatis tempor, mattis ultricies nibh. Nullam euismod gravida purus vel faucibus. Nunc vehicula sed mi in tempus. Maecenas porttitor, nibh eu vehicula ultrices, erat magna venenatis lectus, quis blandit erat odio vel urna. Donec congue nulla est, eget mollis nisi scelerisque eu. Nunc nulla arcu, vulputate vel bibendum sit amet, mattis nec libero. In ornare efficitur magna sit amet accumsan. Pellentesque tincidunt lobortis libero et interdum. Duis non blandit ante, in eleifend nibh. Aliquam tincidunt ultricies quam, id aliquam augue mattis et. Aliquam leo leo, egestas quis ex eu, accumsan rutrum arcu. Praesent vitae tellus cursus, placerat nisi a, condimentum lorem.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Claas_Xerion_3800.jpg',
    price: 129_000,
  },
];

export const productsById = products.reduce((map: { [key: string]: Product }, product) => {
  map[product.productId] = product;
  return map;
}, {});
