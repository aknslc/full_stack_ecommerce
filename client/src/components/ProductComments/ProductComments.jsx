import { useState } from 'react';
import styles from './productcomments.module.scss'
import { RxAvatar } from 'react-icons/rx'
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import useFetch from '../../hooks/useFetch'
import { AiTwotoneStar } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { useAuth } from '../../context/AuthContext';
import speacialImg from '../../assets/detail.avif'
const commentsPerRow = 2;
const ProductComments = () => {
  const { id } = useParams();
  const { data } = useFetch(`/comments/${id}`)
  const { user } = useAuth()

  const navigate = useNavigate();
  // comment load more
  const [next, setNext] = useState(commentsPerRow);
  const handleMoreComment = () => {
    setNext(next + commentsPerRow);
  };

  // formik
  const formik = useFormik({
    initialValues: {
      comment: '',
      product_id: id,
    },
    onSubmit: async values => {
      if (user) {
        await axios.post(`/comments/${id}`, values)
        window.location.reload();
      } else {
        alert("please login")
        navigate('/login')
      }
    },
  });
  return (
    <div className={styles.productComments}>
      <div className="container">
        <div className={styles.inner}>

          <div className="text-center">
            <h3>Product Reviews</h3>
          </div>
          <form onSubmit={formik.handleSubmit} className={`${styles.commentsArea}`}>

            <div className={styles.inputDiv}>
              <textarea
                id="comment"
                name="comment"
                onChange={formik.handleChange}
                placeholder='Comment . . .'
                value={formik.values.comment}
              />
              <button type="submit">Comment</button>
            </div>

          </form>

          <div className={`${styles.userComments}`}>
            {data?.slice(0, next)?.map((item) => (
              <div key={item._id} className={styles.commentsItem}>
                <div className={styles.commentsContent}>
                  {item.comment}
                </div>
                <div className={styles.commentsAuthor}>
                  <div><RxAvatar size={20} /></div>
                  <div>{item.user_id}</div>
                </div>
                <div className={styles.commentsDate}>
                  {item.createdAt}
                </div>
                <div className="stars">
                  <AiTwotoneStar color='orange' size={15} />
                  <AiTwotoneStar color='orange' size={15} />
                  <AiTwotoneStar color='orange' size={15} />
                  <AiTwotoneStar color='orange' size={15} />
                  <AiTwotoneStar color='orange' size={15} />
                </div>
              </div>
            )
            )}

            <div className="text-center d-flex justify-content-center">
              <button disabled={next >= data.length} onClick={handleMoreComment} className='btn btn-outline-secondary btn-lg w-25 d-flex align-items-center justify-content-center '>
                Load More
                <IoIosArrowDown size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductComments