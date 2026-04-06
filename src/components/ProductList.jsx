import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/CartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedProducts, setAddedProducts] = useState(new Set());

  // Product data organized by category
  const plants = {
    'Succulents': [
      {
        id: 1,
        name: 'Aloe Vera',
        price: 12.99,
        description: 'Easy-to-care succulent with healing gel',
        image: '🌵'
      },
      {
        id: 2,
        name: 'Echo Plant',
        price: 14.99,
        description: 'Beautiful rosette-shaped succulent',
        image: '🌿'
      },
      {
        id: 3,
        name: 'Jade Plant',
        price: 16.99,
        description: 'Decorative succulent with thick green leaves',
        image: '🪴'
      },
      {
        id: 4,
        name: 'Sedum Autumn Joy',
        price: 13.99,
        description: 'Color-changing succulent beauty',
        image: '🌸'
      },
      {
        id: 5,
        name: 'Haworthia',
        price: 11.99,
        description: 'Compact succulent with interesting patterns',
        image: '💚'
      },
      {
        id: 6,
        name: 'Sempervivum',
        price: 13.49,
        description: 'Hardy succulent with star-shaped rosettes',
        image: '⭐'
      }
    ],
    'Flowering Plants': [
      {
        id: 7,
        name: 'Orchid',
        price: 24.99,
        description: 'Elegant orchid with vibrant blooms',
        image: '🌺'
      },
      {
        id: 8,
        name: 'Hibiscus',
        price: 19.99,
        description: 'Tropical flowering plant with large flowers',
        image: '🌷'
      },
      {
        id: 9,
        name: 'Bougainvillea',
        price: 18.99,
        description: 'Colorful flowering shrub',
        image: '🌸'
      },
      {
        id: 10,
        name: 'Anthurium',
        price: 21.99,
        description: 'Heart-shaped exotic flowers',
        image: '❤️‍🩹'
      },
      {
        id: 11,
        name: 'Geranium',
        price: 15.99,
        description: 'Classic flowering plant with round blooms',
        image: '🌼'
      },
      {
        id: 12,
        name: 'Camellia',
        price: 22.99,
        description: 'Elegant flowers with glossy leaves',
        image: '🌹'
      }
    ],
    'Foliage Plants': [
      {
        id: 13,
        name: 'Monstera Deliciosa',
        price: 26.99,
        description: 'Large-leaved tropical plant',
        image: '🌿'
      },
      {
        id: 14,
        name: 'Pothos Plant',
        price: 14.99,
        description: 'Trailing plant perfect for any room',
        image: '🌱'
      },
      {
        id: 15,
        name: 'Philodendron',
        price: 17.99,
        description: 'Heart-shaped leaves with elegant growth',
        image: '💚'
      },
      {
        id: 16,
        name: 'Snake Plant',
        price: 13.99,
        description: 'Air-purifying plant with striking leaves',
        image: '🗡️'
      },
      {
        id: 17,
        name: 'Rubber Plant',
        price: 19.99,
        description: 'Large glossy leaves, statement plant',
        image: '🍃'
      },
      {
        id: 18,
        name: 'Calathea',
        price: 21.99,
        description: 'Beautiful patterned leaves',
        image: '🎨'
      }
    ],
    'Climbing Plants': [
      {
        id: 19,
        name: 'Ivy',
        price: 12.99,
        description: 'Classic climbing vine',
        image: '🌿'
      },
      {
        id: 20,
        name: 'Hoya Carnosa',
        price: 16.99,
        description: 'Heart-shaped leaves with fragrant flowers',
        image: '💗'
      },
      {
        id: 21,
        name: 'Jasmine',
        price: 18.99,
        description: 'Fragrant climbing plant',
        image: '🌸'
      },
      {
        id: 22,
        name: 'Clematis',
        price: 19.99,
        description: 'Vibrant flowering climber',
        image: '🌺'
      },
      {
        id: 23,
        name: 'Passion Flower',
        price: 17.99,
        description: 'Exotic climbing plant with unique flowers',
        image: '🌟'
      },
      {
        id: 24,
        name: 'Morning Glory',
        price: 11.99,
        description: 'Beautiful blue flowering climber',
        image: '🌙'
      }
    ],
    'Air-Purifying Plants': [
      {
        id: 25,
        name: 'Spider Plant',
        price: 9.99,
        description: 'Efficient air-purifier, easy care',
        image: '🕷️'
      },
      {
        id: 26,
        name: 'Boston Fern',
        price: 14.99,
        description: 'Lush fronds that clean the air',
        image: '🌿'
      },
      {
        id: 27,
        name: 'Bamboo Palm',
        price: 24.99,
        description: 'Tall elegant palm, powerful air purifier',
        image: '🎋'
      },
      {
        id: 28,
        name: 'Dracaena',
        price: 16.99,
        description: 'Colorful leaves with excellent air-purifying',
        image: '🎨'
      },
      {
        id: 29,
        name: 'Gerbera Daisy',
        price: 13.99,
        description: 'Colorful flowers that purify air',
        image: '🌼'
      },
      {
        id: 30,
        name: 'Peace Lily',
        price: 15.99,
        description: 'Elegant white flowers, excellent air cleaner',
        image: '🤍'
      }
    ],
    'Decorative Plants': [
      {
        id: 31,
        name: 'Fiddle Leaf Fig',
        price: 32.99,
        description: 'Large statement plant for modern interiors',
        image: '🍂'
      },
      {
        id: 32,
        name: 'African Violet',
        price: 12.99,
        description: 'Delicate flowers, compact size',
        image: '💜'
      },
      {
        id: 33,
        name: 'Begonia',
        price: 13.99,
        description: 'Decorative leaves and flowers',
        image: '🌺'
      },
      {
        id: 34,
        name: 'Azalea',
        price: 22.99,
        description: 'Stunning flowering shrub',
        image: '🌷'
      },
      {
        id: 35,
        name: 'Croton',
        price: 18.99,
        description: 'Vibrant multi-colored leaves',
        image: '🌈'
      },
      {
        id: 36,
        name: 'Impatiens',
        price: 11.99,
        description: 'Colorful flowers for shady spots',
        image: '🌸'
      }
    ]
  };

  const handleAddToCart = (plant) => {
    dispatch(cartActions.addToCart({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image
    }));

    // Mark product as added
    setAddedProducts(prev => new Set([...prev, plant.id]));
  };

  return (
    <div className="products-container">
      {Object.entries(plants).map(([category, categoryPlants]) => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="products-grid">
            {categoryPlants.map(plant => (
              <div key={plant.id} className="product-card">
                <div className="product-image" style={{ fontSize: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e8f5e9' }}>
                  {plant.image}
                </div>
                <div className="product-info">
                  <h3 className="product-name">{plant.name}</h3>
                  <p className="product-description">{plant.description}</p>
                  <p className="product-price">${plant.price.toFixed(2)}</p>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedProducts.has(plant.id)}
                  >
                    {addedProducts.has(plant.id) ? '✓ Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
