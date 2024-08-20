import React, { useCallback, useMemo } from "react";
import style from "./form-change-device.module.scss";
import InputChange from "../../../../components/input-change";
import SubmitChange from "../../../../components/submit-change";
import ImageOutput from "../../../../components/image-edit";
import { useGetChangeProduct } from "../../hooks/use-get-product";
import { useSubmitChangeProduct } from "../../hooks/use-change-product";
import { useActionsChange } from "../../hooks/use-actions-change";
import ErrorAuth from "@/components/error-auth";
import { Save } from "lucide-react";
import ImageEditModal from "@/components/image-edit";
import cls from "classnames";

import { Formik, FormikProvider } from "formik";
import Textarea from "@/shared/ui/textarea";
import Link from "next/link";
import { paths } from "@/shared/config/paths";
import { useRouter } from "next/router";
import { useParams, useSearchParams } from "next/navigation";

const FormChangeDevice = () => {
  const {
    errorsInputsStates,
    formik,

    isCountDescription,
    textErrors,
  } = useActionsChange();

  const searchParams = useSearchParams();

  const page = new URLSearchParams(searchParams?.toString()).get("page");

  return (
    <FormikProvider value={formik}>
      <form className={style.root} onSubmit={formik.handleSubmit}>
        <ImageEditModal
          hasError={errorsInputsStates.image}
          width={300}
          height={300}
        />
        <InputChange
          className={style.root__field}
          fieldName="title"
          type="text"
          hasError={errorsInputsStates.title}
          textError={textErrors.title}
          {...formik.getFieldProps("title")}
        />
        <InputChange
          className={style.root__field}
          fieldName="price"
          type="number"
          hasError={errorsInputsStates.price}
          textError={textErrors.price}
          {...formik.getFieldProps("price")}
        >
          {" "}
        </InputChange>
        <Textarea
          className={style.root__field}
          classNameField={style.root__field_description}
          hasErrorInput={errorsInputsStates.description}
          textError={textErrors.description}
          viewSymbol={{
            maxLength: 400,
            lenght: isCountDescription,
          }}
          labelElement={
            <label
              className={style.root__label_description}
              htmlFor={"description"}
            >
              Описание
            </label>
          }
          id="description"
          {...formik.getFieldProps("description")}
        />
        <div className={style.root__actions}>
          <Link href={paths.adminList(page as string)}>Назад</Link>
          <SubmitChange
            textButton="Изменить"
            icon={<Save className={style.root__icon} width={20} height={20} />}
          />
        </div>
      </form>
    </FormikProvider>
  );
};

export default FormChangeDevice;
