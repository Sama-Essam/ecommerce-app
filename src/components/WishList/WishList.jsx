import { WishListContext } from "../../Context/WishlistContext";

export default function WishList() {
  let { getuserwishlist } = useContext(WishListContext);

  async function getwishlist() {
    let response = await getuserwishlist();
    console.log(response);
  }

  useEffect(() => {
    getwishlist();
  }, []);

  return <></>;
}
