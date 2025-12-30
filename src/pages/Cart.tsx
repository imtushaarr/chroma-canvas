import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag, ArrowRight, Truck, Shield, RotateCcw } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VectorDecorations from '@/components/VectorDecorations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
  category: string;
}

const initialCartItems: CartItem[] = [
  { id: 1, name: 'CYBER PULSE TEE', price: 1499, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80', size: 'L', quantity: 2, category: 'T-Shirts' },
  { id: 2, name: 'NEON DREAMS', price: 1799, image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80', size: 'M', quantity: 1, category: 'T-Shirts' },
  { id: 3, name: 'CYBERPUNK DREAMS', price: 499, image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80', size: 'A3', quantity: 1, category: 'Posters' },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = appliedCoupon ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal > 2000 ? 0 : 99;
  const total = subtotal - discount + shipping;

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'krafcool10') {
      setAppliedCoupon(couponCode);
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <VectorDecorations />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground">Shopping Cart</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl tracking-wider">
              <span className="text-foreground">YOUR</span>{' '}
              <span className="gradient-text">CART</span>
            </h1>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="w-20 h-20 mx-auto text-muted-foreground mb-6" />
              <h2 className="font-display text-3xl text-foreground mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Looks like you haven't added any items yet.</p>
              <Link to="/products">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  Continue Shopping
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {/* Header Row */}
                <div className="hidden md:grid grid-cols-12 gap-4 text-sm text-muted-foreground pb-4 border-b border-border">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                {/* Items */}
                {cartItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                  >
                    {/* Product */}
                    <div className="md:col-span-6 flex items-center gap-4">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div>
                        <p className="text-xs text-primary uppercase tracking-wider">{item.category}</p>
                        <h3 className="font-display text-lg text-foreground">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="md:col-span-2 text-center">
                      <span className="md:hidden text-muted-foreground text-sm">Price: </span>
                      <span className="text-foreground font-medium">₹{item.price.toLocaleString('en-IN')}</span>
                    </div>

                    {/* Quantity */}
                    <div className="md:col-span-2 flex items-center justify-center gap-2">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-medium text-foreground">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Total */}
                    <div className="md:col-span-2 text-right">
                      <span className="md:hidden text-muted-foreground text-sm">Total: </span>
                      <span className="text-lg font-semibold gradient-text">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Continue Shopping */}
                <Link to="/products" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-4">
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  Continue Shopping
                </Link>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                  <h2 className="font-display text-2xl text-foreground mb-6 flex items-center gap-2">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                    ORDER SUMMARY
                  </h2>

                  {/* Coupon */}
                  <div className="mb-6">
                    <label className="text-sm text-muted-foreground mb-2 block">Coupon Code</label>
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Enter code" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="bg-muted border-border"
                      />
                      <Button variant="outline" onClick={applyCoupon}>Apply</Button>
                    </div>
                    {appliedCoupon && (
                      <p className="text-sm text-primary mt-2">✓ Coupon applied: 10% off</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-2">Try: KRAFCOOL10</p>
                  </div>

                  <Separator className="my-4" />

                  {/* Totals */}
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal ({cartItems.reduce((s, i) => s + i.quantity, 0)} items)</span>
                      <span className="text-foreground">₹{subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-primary">
                        <span>Discount</span>
                        <span>-₹{discount.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-foreground">
                        {shipping === 0 ? <span className="text-primary">FREE</span> : `₹${shipping}`}
                      </span>
                    </div>
                    {shipping > 0 && (
                      <p className="text-xs text-muted-foreground">Free shipping on orders above ₹2,000</p>
                    )}
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between items-center mb-6">
                    <span className="font-display text-xl text-foreground">TOTAL</span>
                    <span className="text-2xl font-bold gradient-text">₹{total.toLocaleString('en-IN')}</span>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 h-12 text-lg font-display tracking-wider">
                    CHECKOUT
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  {/* Trust Badges */}
                  <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-border">
                    <div className="text-center">
                      <Truck className="w-5 h-5 mx-auto text-primary mb-1" />
                      <span className="text-xs text-muted-foreground">Free Shipping</span>
                    </div>
                    <div className="text-center">
                      <Shield className="w-5 h-5 mx-auto text-primary mb-1" />
                      <span className="text-xs text-muted-foreground">Secure Pay</span>
                    </div>
                    <div className="text-center">
                      <RotateCcw className="w-5 h-5 mx-auto text-primary mb-1" />
                      <span className="text-xs text-muted-foreground">Easy Returns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;