import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { FormikProps, Form, Field, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../types/product.type";

type StockCreatePageProps = {
  //
};

const StockCreatePage: React.FC<any> = () => {
  const showPreviewImage = (values: any) => {
    if (values.file_obj) {
      return <img src={values.file_obj} style={{ height: 100 }} />;
    }
  };

  const showForm = ({ values, setFieldValue }: FormikProps<Product>) => {
    return (
      <Form>
        <Card>
          <CardContent sx={{ padding: 4 }}>
            <Typography gutterBottom variant="h3">
              Create Stock
            </Typography>

            <Field
              style={{ marginTop: 16 }}
              fullWidth
              component={TextField}
              name="name"
              type="text"
              label="Name"
            />
            <br />
            <Field
              style={{ marginTop: 16 }}
              fullWidth
              component={TextField}
              name="price"
              type="number"
              label="Price"
            />

            <Field
              style={{ marginTop: 16 }}
              fullWidth
              component={TextField}
              name="stock"
              type="number"
              label="Stock"
            />

            <div style={{ margin: 16 }}>{showPreviewImage(values)}</div>

            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/ic_photo.png`}
                style={{ width: 25, height: 20 }}
              />
              <span style={{ color: "#00B0CD", marginLeft: 10 }}>
                Add Picture
              </span>

              <input
                type="file"
                onChange={(e: React.ChangeEvent<any>) => {
                  e.preventDefault();
                  setFieldValue("file", e.target.files[0]); // for upload
                  setFieldValue(
                    "file_obj",
                    URL.createObjectURL(e.target.files[0])
                  ); // for preview image
                }}
                name="image"
                click-type="type1"
                multiple
                accept="image/*"
                id="files"
                style={{ padding: "20px 0 0 20px" }}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginRight: 1 }}
            >
              Create
            </Button>
            <Button component={Link} to="/stock" variant="outlined" fullWidth>
              Cancl
            </Button>
          </CardActions>
        </Card>
      </Form>
    );
  };

  const initialValues: Product = { name: "", stock: 2000, price: 3000 };

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, {}) => {
          alert(JSON.stringify(values));
        }}
      >
        {(props: any) => showForm(props)}
      </Formik>
    </Box>
  );
};

export default StockCreatePage;
