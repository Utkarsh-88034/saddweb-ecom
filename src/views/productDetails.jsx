import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import Details from "../components/ProductDetails/Details";
import Features from "../components/ProductDetails/Features";
import Price from "../components/ProductDetails/Price";
import ProdImages from "../components/ProductDetails/ProdImages";
import useStore from "../store";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const ProductDetails = () => {

  
  const [step, setStep] = useState(1);
  const addProduct = useStore((state) => state.addProduct);
  const addFeaturedProdById = useStore((state) => state.addFeaturedProdById);
  const updateProduct = useStore((state) => state.updateProduct);
  const param = useParams();
  const getProductById = useStore((state) => state.getProductById);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (param.id) {
      const get = async () => {
        const pr = await getProductById(param.id);
        setProduct(pr);
      };
      get();
    }
  }, []);

  const nameRef = useRef();
  const detailsRef = useRef();
  const weightRef = useRef();
  const mainUrlRef = useRef();
  const [newProductDetails, setNewProductDetails] = useState(null);

  const flavourNameRef = useRef();
  const flavourDescriptionRef = useRef();
  const flavourIngridientsRef = useRef();
  const flavourPriceRef = useRef();
  const flavourDiscountedPriceRef = useRef();
  const authCodeRef = useRef();
  const featuredProductImagesRef = useRef();
  const [newFeaturedProductDetails, setNewFeaturedProductDetails] = useState(null);

  const getProductDetails = (name, details, weight, mainUrl) => {
    const settingProductDetails = {
      name,
      details,
      weight,
      url: mainUrl,
    }
    return settingProductDetails
  }

  const getFeaturedProductDetails = (flavour, ingredients, description, price, discounted_price, auth_code, url) => {
    const settingFeaturedProductDetails = {
      flavour,
      ingredients,
      description,
      price,
      discounted_price,
      auth_code,
      url
    }
    return settingFeaturedProductDetails
  }

  const changeStep = async () => {
    if(step != 4){
        setStep(step + 1)
    }
    else if (step == 4 && !product) {
      // add product logic
      console.log(newProductDetails)
      var productFormData = new FormData();
      productFormData.append("name", newProductDetails.name);
      productFormData.append("weight", newProductDetails.weight);
      productFormData.append("details", newProductDetails.details);
      productFormData.append("url", newProductDetails.url);
      const result = await addProduct(productFormData);

      if(result.status == 200){
        // add featured product logic
        console.log(newFeaturedProductDetails)
        var featuredProductFormData = new FormData();
        featuredProductFormData.append("flavour", newFeaturedProductDetails.flavour)
        featuredProductFormData.append("description", newFeaturedProductDetails.description)
        featuredProductFormData.append("ingredients", newFeaturedProductDetails.ingredients)
        featuredProductFormData.append("price", newFeaturedProductDetails.price)
        featuredProductFormData.append("discounted_price", newFeaturedProductDetails.discounted_price)
        featuredProductFormData.append("auth_code", newFeaturedProductDetails.auth_code)
        newFeaturedProductDetails.url.map((ur)=>{
          featuredProductFormData.append("url", ur)
        })
        const fpresult = await addFeaturedProdById(result.data.data._id, featuredProductFormData)
        console.log(result.data.data._id, fpresult)
        
        if(fpresult.status == 200){
          setStep(1);
          toast.success(result.data.message)
        }
        if(fpresult.status != 200){
          toast.error(fpresult.message)
        }
      }


    } else if (step == 4 && product) {
      const config = {
        // setSendingProductDetials Updated Version
     
      };
      updateProduct(config);
      setStep(1);
    }

    if (step == 1){
      const newProductDetails = getProductDetails(nameRef.current?.value, detailsRef.current?.value, weightRef.current?.value, mainUrlRef.current?.files[0]);
      setNewProductDetails(newProductDetails);
 
    }
    if(step == 2){
      const urlArr = Object.keys(featuredProductImagesRef.current?.files)
      const arrUploadUrl = []
      urlArr.map((url)=>{
        let urlConfig = {}
        urlConfig = featuredProductImagesRef.current?.files[url]
        arrUploadUrl.push(urlConfig)
      })
      const settingFeaturedProductDetails = getFeaturedProductDetails(flavourNameRef.current.value,  flavourIngridientsRef.current.value, flavourDescriptionRef.current?.value, flavourPriceRef.current?.value, flavourDiscountedPriceRef.current?.value, authCodeRef.current?.value, arrUploadUrl,)
      setNewFeaturedProductDetails(settingFeaturedProductDetails)
    }
  };

  const NavHead = styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
    @media (max-width: 585px) {
      display: none;
    }
  `;
  const MainHeadProductDetails = styled.p`
    font-weight: 700;
    font-size: 40px;
    @media (max-width: 585px) {
      display: none;
    }
  `;
  const ProductDdetailsPageContainer = styled.div`
    width: 80%;
    margin: auto;
    margin-bottom: 300px;
  `;
  const ProductInfoContainer = styled.div`
    // width: 40rem;
    // height: 30rem;
    background: #f4f4f6;
    border-radius: 12px;
    margin: 30px 0;
    padding: 40px;
    @media (max-width: 585px) {
      background: #ffffff;
      padding: 20px;
    }
  `;
  const NextButton = styled.div`
    display: flex;
    border: 2px solid #b5bdc4;
    border-radius: 12px;
    width: 18rem;
    margin: 30px 0;
    justify-content: center;
    align-items: center;
    height: 50px;
    flex-wrap: wrap;
    padding: 5px 0;
    background: #f9c349;
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    @media (max-width: 585px) {
      margin: auto;
    }
  `;






  return (
    <>
      <TopNav />
      <BottomNav />
      <NavHead>
        <p
          style={{
            fontWeight: "400",
            fontSize: "14px",
            color: "#818181",
          }}
        >
          Admin/
        </p>
        <p style={{ fontWeight: "500" }}>Product</p>
      </NavHead>
      <ProductDdetailsPageContainer>
        <MainHeadProductDetails>Product Details</MainHeadProductDetails>
        <ProductInfoContainer>
          {step == 1 ? (
            <Details
              nameRef={nameRef}
              detailsRef={detailsRef}
              weightRef={weightRef}
              mainUrlRef={mainUrlRef}
              product={product}
            />
          ) : step == 2 ? (
            <Features setStep={setStep} flavourNameRef={flavourNameRef} flavourDescriptionRef={flavourDescriptionRef} flavourIngridientsRef={flavourIngridientsRef} flavourPriceRef={flavourPriceRef} flavourDiscountedPriceRef={flavourDiscountedPriceRef} authCodeRef={authCodeRef} featuredProductImagesRef={featuredProductImagesRef} getFeaturedProductDetails={getFeaturedProductDetails} />
          ) : step == 3 ? (
            <Price getPrice={getProductDetails} price={product?.price} />
          ) : step == 4 ? (
            <ProdImages />
          ) : (
            ""
          )}
        </ProductInfoContainer>
        <NextButton onClick={changeStep}>
          {step == 4 && !product
            ? "Add Product"
            : step == 4 && product
            ? "Update Product"
            : "Next"}
        </NextButton>
      </ProductDdetailsPageContainer>
      <Footer />
    </>
  );
};

export default ProductDetails;
